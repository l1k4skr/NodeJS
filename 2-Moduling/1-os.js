3// const os = require('os'); (deprecated)
const os = require('node:os')

console.log('Nombre del sistema operativo: ', os.platform())
console.log('Versión del sistema operativo: ', os.release())
console.log('Arquitectura: ', os.arch())
console.log('CPUs: ', os.cpus())
console.log('Up time: ', os.uptime() / 60 / 60 / 24, 'días')
