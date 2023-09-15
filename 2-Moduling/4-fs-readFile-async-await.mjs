import { readFile } from "node:fs/promises";

// Async Await - Lectura de 2 archivos - archivo1.txt y archivo2.txt
async function readFileAsync(file) {
    console.log("Leyendo archivo...");
    try {
        const data = await readFile(file, 'utf-8');
        console.log("Archivo leído correctamente");
        console.log(data);
    } catch (error) {
        console.log("Error al leer el archivo");
    }
}
readFileAsync('./archivo.txt');
readFileAsync('./archivo2.txt');
