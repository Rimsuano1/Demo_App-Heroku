const http = require('http');
const file = require('fs');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHeader(200, {"Content-Type": "text/html"});
    file.readFile('./index.html', function (err, html) {
        if (err) {
            throw err; 
        } 
        res.write(html)  
        res.end()
    })
})
server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}/`);
});