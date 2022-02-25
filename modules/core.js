const http = require('http')

http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'})
    response.end("Hello welecome to node js<h1>Hello world</h1>")
}).listen(8080)