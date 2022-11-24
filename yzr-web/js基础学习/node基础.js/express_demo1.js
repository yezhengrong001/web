const express = require('express');
app = express();

app.get('/',function(req,res){
	res.send('Hello World');
})

let server = app.listen(8081,()=>{
	let host = server.address().address;
	let port = server.address().port;
	console.log("访问：http://%s:%s",host,port);
});
