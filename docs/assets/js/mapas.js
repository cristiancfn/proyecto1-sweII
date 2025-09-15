let map;

export function pintarMapa(latitud, longitud, zoom) {
    map = L.map('map').setView([latitud, longitud], zoom);

    const valoresMap = {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', valoresMap).addTo(map);
}

export function actualizarMapaConGeojson(geojson) {
    if (geojson.type != "FeatureCollection") {
        L.geoJSON(geojson).addTo(map);
    }
    let features = geojson.features;
    L.geoJSON(features).addTo(map);
}