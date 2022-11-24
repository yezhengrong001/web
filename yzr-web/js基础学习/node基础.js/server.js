const http = require('http');
const url = require('url');


function start(route){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(pathname);
		response.writeHeader(200,{'Content-Type':'text/plain'})
		response.write('Hello World\n');
		response.end();
	}
	
	
	http.createServer(onRequest).listen(8888);
	console.log("server start run")
}
exports.start = start;
