const fs = require('node:fs');
const callBack = (err, data) => {
    if (err) {
        console.log("Error al leer el archivo");
        return;
    } else {
        console.log("Archivo leído correctamente");
    } 
}
console.log("Leyendo archivo...");
fs.readFile('./2-Moduling/archivo.txt', 'utf-8', callBack);

console.log("Otros procesos...")

console.log("Leyendo segundo archivo...");
fs.readFile('./2-Moduling/archivo2.txt', 'utf-8', callBack);