// Life.exe – minimalny service worker: pozwala zainstalować nakładkę jako aplikację.
// Niczego nie zapisuje w pamięci podręcznej – dane zawsze idą prosto z arkusza.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
