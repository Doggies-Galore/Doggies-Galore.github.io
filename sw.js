'use strict';

// Sillyboard service worker
//  - UI shell: served instantly from cache. In the background we re-fetch it from the
//    cloud; ONLY if the content differs do we replace the cached copy and tell open
//    pages to reload.
//  - Sounds: cached on the device on first play and then never re-downloaded.
//  - Config JSON: network-first so new sounds/pages show up, cache as offline fallback.

const UI_CACHE = 'sillyboard-ui';           // content-checked, no version bump needed
const SOUND_CACHE = 'sillyboard-sounds-v1'; // bump only if sound files are replaced in place

// Only these files are treated as the app UI; every other page on the site is untouched.
const SHELL = [
    'sillyboard.html',
    'silly.html',
    'manifest.webmanifest',
    'icon.svg',
    'icon-192.png',
    'icon-512.png'
];

const NETWORK_FIRST = ['sounds.json', 'pages.json', 'changelog.json', 'about.json'];
const SOUND_EXT = /\.(opus|ogg|wav|aiff?|mp3|m4a)$/i;

const sameFile = (url, name) => new URL(url).pathname.endsWith('/' + name);
const isShell = (url) => {
    const p = new URL(url).pathname;
    return SHELL.some(s => p.endsWith('/' + s));
};

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(UI_CACHE)
            // cache:'reload' bypasses the HTTP cache so the install copy is the cloud copy
            .then(c => Promise.all(SHELL.map(u =>
                fetch(new Request(u, { cache: 'reload' }))
                    .then(r => { if (r.ok) return c.put(u, r); })
                    .catch(() => { })
            )))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(k => k !== UI_CACHE && k !== SOUND_CACHE).map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

async function notifyClients() {
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach(c => c.postMessage({ type: 'ui-updated' }));
}

// Re-fetch from the cloud; if the bytes differ from the cached copy, replace it.
// Resolves true only when an existing cached copy was actually changed.
async function revalidate(request, cached) {
    try {
        const fresh = await fetch(request, { cache: 'no-cache' });
        if (!fresh || !fresh.ok) return false;
        const [a, b] = await Promise.all([cached.clone().arrayBuffer(), fresh.clone().arrayBuffer()]);
        let changed = a.byteLength !== b.byteLength;
        if (!changed) {
            const x = new Uint8Array(a), y = new Uint8Array(b);
            for (let i = 0; i < x.length; i++) { if (x[i] !== y[i]) { changed = true; break; } }
        }
        if (changed) await (await caches.open(UI_CACHE)).put(request, fresh.clone());
        return changed;
    } catch (e) {
        return false; // offline: keep what we have
    }
}

self.addEventListener('fetch', event => {
    const req = event.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);
    if (url.origin !== location.origin) return; // Google Fonts etc: leave to the browser

    // Sounds: cache-first, fill on miss
    if (SOUND_EXT.test(url.pathname)) {
        event.respondWith(
            caches.open(SOUND_CACHE).then(async cache => {
                const hit = await cache.match(req, { ignoreSearch: true });
                if (hit) return hit;
                const res = await fetch(req);
                if (res && res.ok && res.status === 200) cache.put(req, res.clone());
                return res;
            })
        );
        return;
    }

    // Config JSON: network-first, cached copy when offline
    if (NETWORK_FIRST.some(n => sameFile(req.url, n))) {
        event.respondWith(
            fetch(req).then(res => {
                if (res && res.ok) { const c = res.clone(); caches.open(UI_CACHE).then(x => x.put(req, c)); }
                return res;
            }).catch(() => caches.match(req, { ignoreSearch: true }))
        );
        return;
    }

    // UI shell: cache-first, then compare against the cloud copy in the background
    if (isShell(req.url)) {
        event.respondWith((async () => {
            const cache = await caches.open(UI_CACHE);
            const cached = await cache.match(req, { ignoreSearch: true });
            if (cached) {
                event.waitUntil(revalidate(req, cached).then(changed => { if (changed) return notifyClients(); }));
                return cached;
            }
            const res = await fetch(req);
            if (res && res.ok) cache.put(req, res.clone());
            return res;
        })());
    }
});
