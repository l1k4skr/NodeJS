import { platform, release, arch, cpus, uptime } from 'node:os'

console.log('Nombre del sistema operativo: ', platform())
console.log('Versión del sistema operativo: ', release())
console.log('Arquitectura: ', arch())
console.log('CPUs: ', cpus())
console.log('Up time: ', uptime() / 60 / 60 / 24, 'días')
