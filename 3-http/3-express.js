/* eslint-disable no-undef */
const express = require('express');
const app = express();
const charizard = require('./Pokemon/charizard.json');

const PORT = process.env.PORT ?? 3000;

app.disable('x-powered-by');
// Primer middleware
app.get('/', (req, res, next) => {
    const { url, method } = req;
    console.log(`Tu informacion a sido enviada exitosamente a los servidores de la CIA`)
    res.status(200)
    next();

})
app.get('/', (req, res) => {
    const { url, method } = req;
    console.log(`You have requested ${method} ${url}`)
    res.send('<h1>Hello World</h1>');
    res.status(200)
})
app.get('/pokemon/charizard', (req, res) => {
    res.status(200).json(charizard);
})

app.post('/pokemon', (req, res) => 
{
    let body = '';

    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        const data = JSON.parse(body);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    });

}
)


app.use((req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('<h1>404 - Not Found</h1>');
    console.log(`404 - Not Found: ${req.url}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}/`);
})