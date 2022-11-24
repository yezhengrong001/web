// 引入http模块
const http = require('http')

// 创建服务器
http.createServer((req,res)=>{
	// 发送HTTP头部
	//HTTP状态值：200：OK
	//内容类型
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('hallo world\n');
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/')

