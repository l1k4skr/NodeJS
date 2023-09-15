const fs = require('node:fs/promises')
const process = require('node:process')
const path = require('node:path')
const picocolors = require('picocolors')

async function returnFiles(folder) {
    return await fs.readdir(folder).then(files => {
        return files
    }).catch(err => {
        if (err) {
            console.error(picocolors.red(`Error al leer el directorio: ${folder}`))
            console.error(picocolors.red(err.message))
            process.exit(-1)
        }
    })
};
const variable = process.argv[2] ? path.join(process.cwd(), process.argv[2]) : undefined
returnFiles(variable ?? process.cwd()).then(files => {
    files.map(file => {
        const route = path.join(variable ?? process.cwd(), file)
        fs.stat(route, 'utf-8').then(stats => {
            const tipoArchivo = stats.isFile() ? 'f' : 'd'
            const fileSize = stats.size.toString()
            const fileDate = stats.mtime
            return (`${picocolors.blue(tipoArchivo)} ${picocolors.green(file.padEnd(40))} ${fileSize.padEnd(40)} ${picocolors.bgCyan(fileDate)}`)
        }).then(file => {
            console.log(file)
        }
  })
})
