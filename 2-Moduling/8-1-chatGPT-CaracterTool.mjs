/*
    Entrada: texto de entrada (string de caracteres)
    Funcionamiento: Copiar los primeros 2048 caractere de la entrada al portapapeles con la posibilidad de apretar una tecla para que se copie los
                    siguientes 2048 caracteres hasta que el texto de entrada se acabe
*/

import clipboardy from 'clipboardy'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function waitForEnter() {
  rl.question('Presiona "Enter" para copiar el siguiente segmento al portapapeles...', (input) => {
    if (input === '') {
      rl.close()
      console.log('Texto de entrada completamente copiado en el portapapeles.')
    } else {
      console.log('Ha ocurrido un error. Inténtalo de nuevo.')
      process.exit(-1)
    }
  })
}
console.log('Iniciando el programa...')

const texto = clipboardy.readSync()

const limite = 7500
let counter = 0
while (counter < limite) {
  const textoCortado = texto.slice(counter, limite)
  waitForEnter()
  console.log(`Cortando texto desde el carácter ${counter} hasta el carácter ${counter + limite}...`)
  clipboardy.writeSync(textoCortado)
  counter += 7500
}
console.log('Programa finalizado.')
