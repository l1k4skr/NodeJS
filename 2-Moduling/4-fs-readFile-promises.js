const fs = require('node:fs/promises') // <- This is the new way to import fs module

console.log('Leyendo archivo...')
fs.readFile('./archivo.txt', 'utf-8').then((data) => {
    console.log('Archivo leído correctamente')
    console.log(data)
}).catch((err) => {
    console.log('Error al leer el archivo')
})

console.log('Otros procesos...')

console.log('Leyendo segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8').then((data) => {
    console.log('Archivo leído correctamente')
    console.log(data)
}).catch((err) => {
    console.log('Error al leer el archivo')
})
