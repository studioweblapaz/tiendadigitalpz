// Service Worker básico y optimizado para PWA SaaS
// Garantiza instalación y datos siempre frescos (sin caché obsoleto)

self.addEventListener('install', (event) => {
  // Forza a que el nuevo service worker se active inmediatamente
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Toma el control de todas las pestañas abiertas inmediatamente
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Estrategia "Network First" (Solo red): 
  // Siempre pide los datos más recientes a Firebase/Cloudinary.
  // Esto evita que los clientes vean menús o precios antiguos.
  event.respondWith(fetch(event.request));
});