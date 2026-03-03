/**
 * Notification Service for Launcher
 * Handles WebSocket connection to discord_bot.py and manages notification UI.
 */
class NotificationService {
    constructor() {
        this.ws = null;
        this.reconnectTimer = null;
        this.history = JSON.parse(localStorage.getItem('launcher-notif-history') || '[]');
        this.isDND = localStorage.getItem('launcher-dnd') === 'true';
        this.isSilent = localStorage.getItem('launcher-silent') === 'true';
        this.status = 'disconnected'; // disconnected, connecting, connected, error, silent, unconfigured

        this.injectStyles();
        this.initUI();
        this.connect();
        // Listen for setting changes
        window.addEventListener('storage', (e) => {
            const key = e ? e.key : null;
            if (!key) {
                // Bulk check on manual dispatch
                this.isDND = localStorage.getItem('launcher-dnd') === 'true';
                this.isSilent = localStorage.getItem('launcher-silent') === 'true';
                this.updateStatusIcons();
                this.pushSync('launcher-grid');
                this.pushSync('launcher-bg');
                this.pushSync('launcher-accent');
                return;
            }

            if (key === 'launcher-dnd') {
                this.isDND = localStorage.getItem('launcher-dnd') === 'true';
                this.updateStatusIcons();
            }
            if (key === 'launcher-silent') {
                this.isSilent = localStorage.getItem('launcher-silent') === 'true';
                this.updateStatusIcons();
            }
            if (key === 'launcher-ws-address' || key === 'launcher-ws-token' || key === 'launcher-ws-username') {
                this.disconnect();
                this.connect();
            }

            // PUSH SYNC on local changes
            if (key === 'launcher-grid' || key === 'launcher-bg' || key === 'launcher-accent') {
                this.pushSync(key);
            }
        });
    }

    pushSync(key) {
        if (!this.ws || this.status !== 'connected') return;
        const val = localStorage.getItem(key);
        // Only send if it's actually a known sync key
        if (!['launcher-grid', 'launcher-bg', 'launcher-accent'].includes(key)) return;

        // Prevent echoing back what we just received
        if (this._lastSyncValues && this._lastSyncValues[key] === val) return;

        this.ws.send(JSON.stringify({
            type: 'sync',
            key: key,
            value: val
        }));
    }

    injectStyles() {
        if (document.getElementById('notif-styles')) return;
        const style = document.createElement('style');
        style.id = 'notif-styles';
        style.textContent = `
            #notif-container {
                position: fixed;
                top: 15px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 10000;
                display: flex;
                flex-direction: column;
                align-items: center;
                pointer-events: none;
                width: 100%;
                max-width: 600px;
            }

            .notif-banner {
                background: var(--bg-color);
                color: var(--accent-color);
                border: 4px solid var(--accent-color);
                padding: 10px 25px;
                border-radius: 40px;
                font-weight: bold;
                font-size: 1.35rem;
                box-shadow: 0 10px 40px rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;
                pointer-events: auto;
                cursor: pointer;
                overflow: hidden;
                white-space: nowrap;
                max-width: 95%;
                min-width: 60px;
                transform-origin: center;
                z-index: 10001;
                margin-bottom: 10px;
                flex-shrink: 0;
            }

            .notif-content {
                transition: opacity 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
            }

            .notif-banner.shrinking {
                justify-content: center;
                gap: 0;
            }

            .notif-banner.shrinking .notif-content {
                opacity: 0;
                width: 0;
                min-width: 0;
                overflow: hidden;
            }

            .notif-bell-wrap {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .notif-count {
                position: absolute;
                top: -8px;
                right: -8px;
                background: #ff4c4c;
                color: white;
                font-size: 0.7rem;
                padding: 2px 6px;
                border-radius: 10px;
                border: 2px solid var(--accent-color);
            }

            .status-icon {
                width: 3vw;
                height: 3vw;
                margin-right: 15px;
                opacity: 0.7;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            #bell-launcher {
                cursor: pointer;
                pointer-events: auto;
                display: flex;
                align-items: center;
                gap: 5px;
                transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                margin-right: 25px;
            }

            #bell-launcher:hover {
                transform: scale(1.1);
            }

            #bell-launcher:active {
                transform: scale(0.95);
            }

            .global-fade-out {
                animation: globalFadeOut 0.4s cubic-bezier(0.4, 0.0, 0.2, 1) forwards !important;
            }

            @keyframes globalFadeOut {
                from { opacity: 1; transform: scale(1); }
                to { opacity: 0; transform: scale(0.85); }
            }
        `;
        document.head.appendChild(style);
    }

    initUI() {
        // Find or create notification anchor
        let container = document.getElementById('notif-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notif-container';
            document.body.appendChild(container);
        }

        // Add Bell Icon to Header next to time
        const timeEl = document.getElementById('time');
        if (timeEl && !document.getElementById('bell-launcher')) {
            const bell = document.createElement('div');
            bell.id = 'bell-launcher';
            bell.className = 'notif-bell-wrap';
            bell.innerHTML = `
                <svg viewBox="0 0 24 24" width="3vw" height="3vw" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span id="global-notif-count" class="notif-count" style="display: none;">0</span>
            `;
            bell.onclick = () => this.navigateToNotifications();
            timeEl.parentElement.insertBefore(bell, timeEl);
        }

        this.updateStatusIcons();
        this.updateCount();
    }

    updateStatusIcons() {
        const timeEl = document.getElementById('time');
        if (!timeEl) return;

        // Remove existing
        const oldIcons = timeEl.parentElement.querySelectorAll('.status-icon');
        oldIcons.forEach(i => i.remove());

        if (this.isSilent) {
            const icon = this.createIcon('<path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>');
            timeEl.parentElement.insertBefore(icon, timeEl);
        }

        if (this.isDND) {
            const icon = this.createIcon('<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M8 12h8"></path>');
            timeEl.parentElement.insertBefore(icon, timeEl);
        }
    }

    createIcon(svgInner) {
        const div = document.createElement('div');
        div.className = 'status-icon';
        div.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svgInner}</svg>`;
        return div;
    }

    connect() {
        const address = localStorage.getItem('launcher-ws-address');
        const token = localStorage.getItem('launcher-ws-token');
        const username = localStorage.getItem('launcher-ws-username');

        if (!address || !token || !username) {
            this.updateStatus('unconfigured');
            return;
        }

        this.updateStatus('connecting');
        console.log(`[Notif] Connecting to ${address}...`);
        try {
            this.ws = new WebSocket(address);
            this.ws.onopen = () => {
                console.log("[Notif] WebSocket connected.");
                this.updateStatus('connected');
                this.ws.send(JSON.stringify({ type: 'login', username, token }));
            };
            this.ws.onmessage = (e) => {
                try {
                    const data = JSON.parse(e.data);
                    if (data.type === 'auth' && data.message === 'ok') {
                        console.log("[Notif] Auth successful.");
                    } else if (data.type === 'sync') {
                        this.handleSync(data);
                    } else if (data.type === 'discord' || data.type === 'test' || data.type === 'tumblr') {
                        this.handleIncoming(data);
                    }
                } catch (err) { console.error(err); }
            };
            this.ws.onclose = () => {
                console.log("[Notif] Connection lost. Reconnecting...");
                this.updateStatus('disconnected');
                this.reconnect();
            };
            this.ws.onerror = (e) => {
                console.error("[Notif] WebSocket error:", e);
                this.updateStatus('error');
            };
        } catch (e) {
            console.error(e);
            this.updateStatus('error');
            this.reconnect();
        }
    }

    updateStatus(s) {
        this.status = s;
        const event = new CustomEvent('sync-status-change', { detail: s });
        window.dispatchEvent(event);
    }

    handleSync(data) {
        if (data.key && data.value !== undefined) {
            const current = localStorage.getItem(data.key);
            if (current === data.value) return; // Already in sync

            console.log(`[Sync] Applying remote change for ${data.key}`);
            if (!this._lastSyncValues) this._lastSyncValues = {};
            this._lastSyncValues[data.key] = data.value;

            localStorage.setItem(data.key, data.value);

            // Refresh visuals immediately if it's a theme change
            if (data.key === 'launcher-bg') document.documentElement.style.setProperty('--bg-color', data.value);
            if (data.key === 'launcher-accent') document.documentElement.style.setProperty('--accent-color', data.value);

            // Re-render grid if it's a layout change and we're on the main page
            if (data.key === 'launcher-grid' && typeof renderGridContents === 'function') {
                renderGridContents(JSON.parse(data.value));
            }
        }
    }

    disconnect() {
        if (this.ws) {
            this.ws.onclose = null;
            this.ws.close();
            this.ws = null;
        }
        if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
    }

    reconnect() {
        if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
        this.reconnectTimer = setTimeout(() => this.connect(), 5000);
    }

    navigateToNotifications() {
        sessionStorage.setItem('lastAppIndex', '999');
        document.body.classList.add('global-fade-out');
        setTimeout(() => {
            window.location.href = 'notifications.html';
        }, 400);
    }

    handleIncoming(data) {
        if (this.isSilent) return;
        const notif = {
            id: Date.now(),
            type: data.type,
            author: data.author || 'System',
            content: data.content || data.message || '',
            time: (data.time && !isNaN(new Date(data.time).getTime())) ? data.time : new Date().toISOString()
        };

        this.history.unshift(notif);
        if (this.history.length > 50) this.history.pop();
        localStorage.setItem('launcher-notif-history', JSON.stringify(this.history));

        this.updateCount();

        if (!this.isDND) {
            this.showBanner(notif);
        }
    }

    showBanner(notif) {
        const container = document.getElementById('notif-container');
        const banner = document.createElement('div');
        banner.className = 'notif-banner';
        banner.innerHTML = `
            <div class="notif-bell-wrap" style="flex-shrink:0;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </div>
            <div class="notif-content">
                <span style="opacity: 0.6; margin-right: 5px;">${notif.author}:</span>
                <span>${notif.content}</span>
            </div>
        `;

        banner.onclick = () => this.navigateToNotifications();
        container.appendChild(banner);

        const naturalWidth = banner.offsetWidth;

        // 1. STRETCH IN (Web Animations API)
        banner.animate([
            { opacity: 0, transform: 'translateY(-50px) scaleX(0.4)', width: '60px', padding: '10px' },
            { opacity: 1, transform: 'translateY(0) scaleX(1)', width: naturalWidth + 'px', padding: '10px 25px' }
        ], {
            duration: 700,
            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            fill: 'forwards'
        });

        // 2. COMPRESS / SHRINK
        setTimeout(() => {
            if (!banner.parentElement) return;
            banner.classList.add('shrinking');
            banner.animate([
                { width: naturalWidth + 'px', padding: '10px 25px' },
                { width: '60px', padding: '10px' }
            ], {
                duration: 600,
                easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                fill: 'forwards'
            });

            // 3. DISMISS
            setTimeout(() => {
                if (!banner.parentElement) return;
                const currentHeight = banner.offsetHeight;
                banner.animate([
                    { opacity: 1, transform: 'translateY(0) scale(1)', height: currentHeight + 'px', marginBottom: '10px' },
                    { opacity: 0, transform: 'translateY(-20px) scale(0.9)', height: '0px', marginBottom: '0px', padding: '0px', borderWidth: '0px' }
                ], {
                    duration: 400,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                }).onfinish = () => banner.remove();
            }, 3000);
        }, 5000);
    }

    updateCount() {
        const countEl = document.getElementById('global-notif-count');
        if (countEl) {
            const count = this.history.length;
            countEl.textContent = count > 99 ? '99+' : count;
            countEl.style.display = count > 0 ? 'block' : 'none';
        }
    }
}

// Initialize on load
if (!window.launcherNotifications) {
    window.launcherNotifications = new NotificationService();
}
