const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

// OS module output
console.log("OS Platform:", os.platform());
console.log("OS Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());

// Path module output
console.log("File name:", path.basename(__filename));
console.log("Directory name:", path.dirname(__filename));

// URL module output
const myUrl = new URL('https://example.com:8080/path/name?user=test');
console.log("Host:", myUrl.host);
console.log("Pathname:", myUrl.pathname);
console.log("Search Params:", myUrl.search);

// FS module output
fs.writeFileSync('demo.txt', 'Hello Node.js');
console.log("File created successfully!");

// HTTP module output
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running...");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
