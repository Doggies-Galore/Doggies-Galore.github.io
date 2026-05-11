'use strict';

// Bump this version string to gracefully wipe out bad caches if breaking changes require it.
const CACHE = 'sillyboard-dynamic-v2';

// We only rigidly precache the core shell
const CORE_URLS = [
    './',
    'sillyboard.html',
    'index.html'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE)
            .then(cache => cache.addAll(CORE_URLS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(k => k !== CACHE).map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    // Network-First Strategy: Try the network first.
    // This ensures latest files (GUI, sounds.json, wavs) are used if online.
    // If network fails (offline), fall back to the cache.
    event.respondWith(
        fetch(event.request).then(response => {
            // Update the cache with the fresh version
            if (response && response.ok) {
                const clone = response.clone();
                caches.open(CACHE).then(cache => cache.put(event.request, clone));
            }
            return response;
        }).catch(() => {
            // Offline fallback
            return caches.match(event.request);
        })
    );
});

