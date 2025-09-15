import { pintarMapa, actualizarMapaConGeojson } from "./mapas.js";
import { leerArchivo } from "./ioUtilidades.js";

pintarMapa(4.627961446679538, -74.06588357244644, 19);

leerArchivo("assets/map.geojson")
    .then(geojson => {
        actualizarMapaConGeojson(geojson);
    })
    .catch(error => {
        console.error("Error al cargar GeoJSON: ", error);
    });