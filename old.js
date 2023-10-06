const http = require('http');

http.createServer( (req, res) => {


    res.write('hola mundo');


    res.end();
})

.listen(8070);
console.log('Escuchando el puerto', 8070);