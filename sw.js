/*
Female STEM Pioneers - Inspiring the Next Generation
Copyright (c) 2025 Dynamic Devices Ltd

This work is licensed under the Creative Commons Attribution 4.0 International License.
To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/
or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material for any purpose, even commercially

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license,
  and indicate if changes were made.

Created by Dynamic Devices Ltd in collaboration with Claude.ai
Contact: info@dynamicdevices.co.uk
*/

// Service Worker for caching and offline functionality

const CACHE_NAME = 'female-stem-pioneers-v2';
const STATIC_CACHE = 'female-stem-pioneers-static-v2';
const DYNAMIC_CACHE = 'female-stem-pioneers-dynamic-v2';
const IMAGE_CACHE = 'female-stem-pioneers-images-v2';

// Static resources that don't change often
const staticUrlsToCache = [
    './',
    './css/styles.css',
    './js/performance.js',
    './js/app.js',
    './js/visualizations.js',
    './manifest.json',
    './404.html',
    './images/stem-female-pattern.svg',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap',
    'https://d3js.org/d3.v7.min.js'
];

// Dynamic resources that may change frequently
const dynamicUrls = [
    './js/pioneers.js'
];

// Image resources for caching
const imageUrls = [
    './images/ada-lovelace.jpg',
    './images/marie-curie.jpg',
    './images/katherine-johnson.jpg',
    './images/grace-hopper.jpg',
    './images/chien-shiung-wu.jpg',
    './images/dorothy-vaughan.jpg',
    './images/mae-jemison.jpg',
    './images/radia-perlman.jpg',
    './images/rosalind-franklin.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        Promise.all([
            caches.open(STATIC_CACHE).then(function(cache) {
                console.log('Opened static cache');
                return cache.addAll(staticUrlsToCache);
            }),
            caches.open(DYNAMIC_CACHE).then(function(cache) {
                console.log('Opened dynamic cache');
                return cache.addAll(dynamicUrls);
            }),
            caches.open(IMAGE_CACHE).then(function(cache) {
                console.log('Opened image cache');
                return cache.addAll(imageUrls);
            })
        ])
    );
    // Force the waiting service worker to become the active service worker
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        Promise.all([
            caches.keys().then(function(cacheNames) {
                return Promise.all(
                    cacheNames.map(function(cacheName) {
                        if (cacheName !== STATIC_CACHE && 
                            cacheName !== DYNAMIC_CACHE && 
                            cacheName !== IMAGE_CACHE &&
                            cacheName !== CACHE_NAME) {
                            console.log('Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            self.clients.claim()
        ])
    );
});

self.addEventListener('fetch', function(event) {
    const url = new URL(event.request.url);
    
    // Handle image requests with cache-first strategy
    if (event.request.destination === 'image') {
        event.respondWith(
            caches.open(IMAGE_CACHE).then(function(cache) {
                return cache.match(event.request).then(function(response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request).then(function(networkResponse) {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
        );
        return;
    }

    // Handle font requests
    if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
        event.respondWith(
            caches.open(STATIC_CACHE).then(function(cache) {
                return cache.match(event.request).then(function(response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request).then(function(networkResponse) {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
        );
        return;
    }

    // Handle API requests with network-first strategy
    if (url.pathname.includes('/api/')) {
        event.respondWith(
            fetch(event.request).then(function(response) {
                return caches.open(DYNAMIC_CACHE).then(function(cache) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            }).catch(function() {
                return caches.match(event.request);
            })
        );
        return;
    }

    // Handle static resources with cache-first strategy
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            }
            return fetch(event.request).then(function(networkResponse) {
                if (networkResponse.status === 200) {
                    const responseToCache = networkResponse.clone();
                    caches.open(STATIC_CACHE).then(function(cache) {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            });
        })
    );
});