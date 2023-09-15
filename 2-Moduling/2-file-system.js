const fs = require('node:fs')
// Callback
fs.stat('./2-Moduling/archivo.txt', 'utf-8', (err, stats) => {
    if (err) {
        console.log('Error al leer el archivo')
    } else {
        console.log(
            stats.isFile(),
            stats.isDirectory(),
            stats.isSymbolicLink(),
            stats.size
        )
    }
})

// Promises
fs.promises.stat('./2-Moduling/archivo.txt', 'utf-8').then((stats) => {
    console.log(
        stats.isFile(),
        stats.isDirectory(),
        stats.isSymbolicLink(),
        stats.size
    )
}).catch((err) => {
    console.log('Error al leer el archivo')
})
