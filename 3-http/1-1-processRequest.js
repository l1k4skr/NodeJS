const processRequest = (req, res) => {
    const { url, method } = req;
    console.log(`Request received on ${url} with ${method} method`);

    switch (method) {
    case 'GET':
        switch (url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Home Page');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About Page');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            break;
        }

    }
};
exports.processRequest = processRequest;
