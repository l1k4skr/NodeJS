const http = require('node:http')
const { findAvailablePort } = require('./10-free-port.js')
const displayPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log('Me han hecho una petición')
    res.end('Hola mundo')

})

findAvailablePort(displayPort).then(port => {
    server.listen(port, () => {
        console.log(`Escuchando en el puerto http://localhost:${port}`)
    })
})