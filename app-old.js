const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'application/json'})
  res.write(JSON.stringify({
    data: [{
      name: 'Alejandro Parra',
      age: 22
    }],
    url: req.url,
    status: 200
  }));
  res.end();
}).listen(5000);

console.log('Servidor corriendo sobre el puerto 5000');