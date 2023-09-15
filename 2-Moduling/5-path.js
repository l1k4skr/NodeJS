const path = require('node:path')

// console.log(path.sep)
// / --> unix
// \ --> windows

// Unir rutas
// console.log(path.join('carpeta', 'subcarpeta', 'archivo.txt'))

// Obtener la ruta absoluta
const base = path.basename('2-Moduling/2.file-system.js')
console.log(base)

// Obtener la ruta absoluta sin la extensión
const filename = path.basename('2-Moduling/2.file-system.js', '.js')
console.log(filename)

// Obtener extencion
const ext = path.extname('2-Moduling/2.file-system.js')
console.log(ext)
