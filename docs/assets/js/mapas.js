export function pintarMapa(latitud, longitud, zoom) {
    var map = L.map('map').setView([latitud, longitud], zoom);

    const valoresMap = {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', valoresMap).addTo(map);
}