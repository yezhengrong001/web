const util = require('util')
const fs = require('fs')
const express = require('express');
const app = express();
const port = 8080
app.use(express.urlencoded({extended:false}))
app.use(express.json())

const promise = new Promise((resolve,reject)=>{
	fs.readFile(__dirname+'/index.html',(err,data)=>{
		if(err){
			reject(err)
		}
		resolve(data.toString())
	})
})
let indexData = []
promise.then((value)=>{
	indexData = value;
},(reason)=>{
	console.log(reason);
})

app.get('/index.html',(res,req)=>{
	req.send(indexData);
})
const demo = new Promise((resolve,reject)=>{
	fs.readFile(__dirname+'/demo01.json',(err,data)=>{
		if(err){
			reject(err)
		}
		resolve(data.toString())
	})
})
let demo01Data = []
demo.then((value)=>{
	demo01Data = value;
},(reason)=>{
	console.log(reason);
})
app.get('/demo01.json',(res,req)=>{
	req.send(demo01Data);
})
app.post('/formData',(res,req)=>{
	let {username,password} = res.body;
	console.log("username",username)
	console.log('password',password)
	req.json(res.body);
})

app.listen(port,()=>{
	console.log(`server running at http://127.0.0.1:${port}/index.html`)
	console.log(`server running at http://127.0.0.1:${port}/demo01.json`)
	console.log(`server running at http://127.0.0.1:${port}/formData`)
})