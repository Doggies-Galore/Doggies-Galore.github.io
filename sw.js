'use strict';

// Bump this version string to gracefully wipe out bad caches if breaking changes require it.
const CACHE = 'sillyboard-dynamic-v1';

// We only rigidly precache the core shell
const CORE_URLS = [
    './',
    'sillyboard.html'
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
    const url = new URL(event.request.url);

    // Dynamic JSON -> Network First, fallback to cache
    // This allows editing sounds.json without bumping SW version!
    if (url.pathname.endsWith('sounds.json')) {
        event.respondWith(
            fetch(event.request).then(response => {
                const clone = response.clone();
                caches.open(CACHE).then(cache => cache.put(event.request, clone));
                return response;
            }).catch(() => caches.match(event.request))
        );
        return;
    }

    // Everything else (.wav files, etc) -> Cache First, fallback to Network (then dynamically cache)
    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;
            return fetch(event.request).then(response => {
                if (response && response.ok && response.type === 'basic') {
                    const clone = response.clone();
                    caches.open(CACHE).then(cache => cache.put(event.request, clone));
                }
                return response;
            }).catch(() => { });
        })
    );
});
