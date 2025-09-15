export async function leerArchivo(ruta) {
    const respuesta = await fetch(ruta);
    if (!respuesta.ok) {
        throw new Error("No se pudo cargar el archivo");
    }
    return await respuesta.json();
}