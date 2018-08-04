// Cargar el modulo HTTP
var http = require('http');
var fs = require('fs');
// Configurar una respuesta HTTP para todas las peticiones
function onRequest(request, response) {  
  response.writeHead(200, {"Content-Type": "text/html"});
  fs.readFile('./Clase02/index.html',null,function(error, data){
  	if (error) {
  		response.writeHead(404);
  		response.write("File not Found");
  	}else{
  		response.write(data);
  	}
  	response.end();
  });  
  
}
 
var server = http.createServer(onRequest);
 
// Escuchar al puerto 8080
server.listen(8080);
 
// Poner un mensaje en la consola
console.log("Servidor funcionando en http://localhost:8080/");