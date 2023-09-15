import { readFile } from "node:fs/promises";

async function readFiles(...args) {
    console.log('Leyendo archivos...');

    const [data1, data2] = await Promise.all([
        readFile(args[0], 'utf-8'),
        readFile(args[1], 'utf-8')
    ]);

    console.log(data1);
    console.log(data2);
}
readFiles('./archivo.txt', './archivo2.txt');