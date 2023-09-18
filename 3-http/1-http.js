/* eslint-disable no-undef */
const http = require('node:http')
const { processRequest } = require('./1-1-processRequest')

const desiredPort = process.env.PORT || 3000

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`Server listening on port ${desiredPort}`)
})