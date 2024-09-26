const http = require("http");
const url = require('url');
const fs  = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `New req at ${req.url}\n`; // Add newline to separate logs

    if(req.url === '/favicon.ico') return res.end()

    fs.appendFile('new.txt', log, (err) => {
        if (err) throw err; // Handle file writing error
    });

    const myurl = url.parse(req.url , true);
    console.log(myurl);

    switch (myurl.pathname) {
        case '/':
            res.end("Homepage");
            break;
        case '/about':
            res.end("About page");
            break;
        case '/contact':
            res.end("Contact page");
            break;
        case '/search':
            const search = myurl.query.search_query;
            res.end(search) 
            break   
        default:
            res.end("404 Not found");
            break;
    }
});

myServer.listen(8000, () => console.log("Server is running on port 8000"));
