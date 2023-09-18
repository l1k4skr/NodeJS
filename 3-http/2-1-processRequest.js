const charizard = require('./Pokemon/charizard.json');


const processRequest = (req, res) => {
    const { url, method } = req;
    const date = new Intl.DateTimeFormat('es-ES', { timeZone: 'America/Mexico_City' }).format(new Date())
    res.setHeader('Date', date);
    console.log(date)
    console.log(`Request received on ${url} with ${method} method`);
    /* eslint-disable*/
    switch (method) {
        case 'GET':
            switch (url) {
                case '/': {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Home Page');
                    break;
                }
                case '/about': {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('About Page');
                    break;
                }
                case '/pokemon/charizard': {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify(charizard));
                }
                default: {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('<h1>404 - Not Found</h1>');

                }
            }
        case 'POST':
            {
                switch (url) 
                {
                    case '/pokemon': 
                    {
                        let body = '';
                        
                        // Escuchar el evento data
                        req.on('data', chunk => 
                        {
                            body += chunk.toString();
                        });

                        // Escuchar el evento end
                        req.on('end', () =>
                        {
                            console.log('Data received: ', body, '-'*10);
                            body = JSON.parse(body);
                            // Data recibida completamente
                            console.log('Data: ', body);
                            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
                            res.end(JSON.stringify(body));
                        });
                        break;
                    }

                }
            }
    }
}
/* eslint-enable*/
module.exports.processRequest = processRequest;