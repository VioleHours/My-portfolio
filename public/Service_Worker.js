// Asignar un nombre y versión al cache
const CACHE_NAME = "WebDeveloper",
    urlsToCache = [
        "./", // Raíz, para que funcione con rutas dinámicas en Next.js
        "./_app.js", // Página principal en Next.js
        "./_document.js", // Documento base en Next.js

        // CSS
        "./src/styles/globals.css",
        "./src/styles/Home.module.css",

        // Imágenes y otros recursos estáticos que estén en 'public'
        "./public/images/icons/android-chrome-512x512.png",
        "./public/images/icons/favicon-16x16.png",

        // PDFs
        "./public/Cv Violeta Sol Arias Hours 2024.pdf",
        "./public/Cv Violeta Sol Arias Hours EN-ACT 2024.pdf",

        // Manifest y otros
        "./public/manifest.json",
        "./public/regist_serviceWorker.js",
    ];

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache).then(() => self.skipWaiting());
            })
            .catch((err) => console.log("Falló registro de cache", err))
    );
});

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener("activate", (e) => {
    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        caches
            .keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        //Eliminamos lo que ya no se necesita en cache
                        if (cacheWhitelist.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            // Le indica al SW activar el cache actual
            .then(() => self.clients.claim())
    );
});

//cuando el navegador recupera una url
self.addEventListener("fetch", (e) => {
    //Responder ya sea con el objeto en caché o continuar y buscar la url real
    e.respondWith(
        caches.match(e.request).then((res) => {
            if (res) {
                //recuperar del cache
                return res;
            }
            //recuperar de la petición a la url
            return fetch(e.request);
        })
    );
});
