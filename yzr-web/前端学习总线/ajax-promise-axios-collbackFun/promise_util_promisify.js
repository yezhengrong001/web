const util = require('util');
const fs = require('fs');

const readfile = util.promisify(fs.readFile);
readfile(__dirname+'/笔记.md').then((value)=>{
	console.log(value.toString());
})