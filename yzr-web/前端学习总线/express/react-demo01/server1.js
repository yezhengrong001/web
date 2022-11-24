// TODO: 待补充代码
const express = require('express')
const app = express();
app.get('',(req,res)=>{
	res.send([
		{'name':'张三'},
	])
})
app.listen(8080,()=>{
	console.log('http://127.0.0.1:8080')
})