const process = require('node:process')

// Plataforma
console.log(process.env.PEPITO) // undefined

// Imprime el directorio actual (current working directory - cwd)
console.log(process.cwd())

// Imprime los argumentos de la linea de comandos
console.log(process.argv)
