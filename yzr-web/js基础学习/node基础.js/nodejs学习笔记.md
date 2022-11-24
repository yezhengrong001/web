# nodejs学习笔记
### 创建第一个应用
1.由`require`引入`http`模块
```js
const http = require('http');
```
2.创建一个简单的服务器
```js
http.createServer((request,response)=>{
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHeader(200,{'Context-type':'tetx/plain'});
	response.end('Hallo World\n');
	
}).listen(3000);
console.log('Server running at http://127.0.0.1/3000/');

/* 
 http.createServer((request,response)=>{
 	// 发送 HTTP 头部 
 	// HTTP 状态值: 200 : OK
 	// 内容类型: text/plain
 	response.writeHeader(状态值,{'内容类型':'类型值'});
 	response.end('Hallo World\n');//响应结束在浏览器端打印结果
 	
 }).listen(端口号);
 */
```
**分析Node.js 的 HTTP 服务器：**
 + 第一行请求（require）Node.js 自带的 http 模块，并且把它赋值给 http 变量。
 + 接下来我们调用 http 模块提供的函数： createServer 。这个函数会返回 一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号。
### npm使用介绍
NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
* 允许用户从NPM服务器下载别人编写的第三方包到本地使用
* 允许用户从NPM服务器下载安装别人编写的命令行程序到本地使用
* 允许用户自己编写包或命令行程序上传至NPM服务器供别人使用
由于新版的`node.js`已经集成了`npm`,所以安装好node.js后npm也随之安装好了，`npm -v`命令可查看是否安装成功，切克查看响应版本
若想升级npm,可由下面的命令来升级：
>npm install npm -g
>>淘宝镜像配置：npm install -g cnpm --registry=https://registry.npmmirror.com
#### 使用npm命令安装模块
npm安装node.js命令格式如下：
`npm install <moudle name>`
比如安装`express`模块
`npm install express`
```js
// js中引入方式如下
const express = require('express')
```
####全局安装与本地安装
npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如

+ npm install express          # 本地安装 存放于node_modules目录中 由require引用
+ npm install express -g   # 全局安装 于命令行中使用 在、user/local中 或 在node安装目录下
**如果出现以下错误：**
`npm err! Error: connect ECONNREFUSED 127.0.0.1:8087` 
解决办法为：
`$ npm config set proxy null`
查看安装信息:`npm list -g`
查看某个模块的版本号：`npm list <moudle name>`
####使用package.json
package.json 位于模块的目录下，用于定义包的属性。接下来让我们来看下 express 包的 package.json 文件，位于 node_modules/express/package.json 内容：
```json
{
  "name": "express",
  "description": "Fast, unopinionated, minimalist web framework",
  "version": "4.13.3",
  "author": {
    "name": "TJ Holowaychuk",
    "email": "tj@vision-media.ca"
  },
  "contributors": [
    {
      "name": "Aaron Heckmann",
      "email": "aaron.heckmann+github@gmail.com"
    },
    {
      "name": "Ciaran Jessup",
      "email": "ciaranj@gmail.com"
    },
    {
      "name": "Douglas Christopher Wilson",
      "email": "doug@somethingdoug.com"
    },
    {
      "name": "Guillermo Rauch",
      "email": "rauchg@gmail.com"
    },
    {
      "name": "Jonathan Ong",
      "email": "me@jongleberry.com"
    },
    {
      "name": "Roman Shtylman",
      "email": "shtylman+expressjs@gmail.com"
    },
    {
      "name": "Young Jae Sim",
      "email": "hanul@hanul.me"
    }
  ],
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/strongloop/express.git"
  },
  "homepage": "http://expressjs.com/",
  "keywords": [
    "express",
    "framework",
    "sinatra",
    "web",
    "rest",
    "restful",
    "router",
    "app",
    "api"
  ],
  "dependencies": {
    "accepts": "~1.2.12",
    "array-flatten": "1.1.1",
    "content-disposition": "0.5.0",
    "content-type": "~1.0.1",
    "cookie": "0.1.3",
    "cookie-signature": "1.0.6",
    "debug": "~2.2.0",
    "depd": "~1.0.1",
    "escape-html": "1.0.2",
    "etag": "~1.7.0",
    "finalhandler": "0.4.0",
    "fresh": "0.3.0",
    "merge-descriptors": "1.0.0",
    "methods": "~1.1.1",
    "on-finished": "~2.3.0",
    "parseurl": "~1.3.0",
    "path-to-regexp": "0.1.7",
    "proxy-addr": "~1.0.8",
    "qs": "4.0.0",
    "range-parser": "~1.0.2",
    "send": "0.13.0",
    "serve-static": "~1.10.0",
    "type-is": "~1.6.6",
    "utils-merge": "1.0.0",
    "vary": "~1.0.1"
  },
  "devDependencies": {
    "after": "0.8.1",
    "ejs": "2.3.3",
    "istanbul": "0.3.17",
    "marked": "0.3.5",
    "mocha": "2.2.5",
    "should": "7.0.2",
    "supertest": "1.0.1",
    "body-parser": "~1.13.3",
    "connect-redis": "~2.4.1",
    "cookie-parser": "~1.3.5",
    "cookie-session": "~1.2.0",
    "express-session": "~1.11.3",
    "jade": "~1.11.0",
    "method-override": "~2.3.5",
    "morgan": "~1.6.1",
    "multiparty": "~4.1.2",
    "vhost": "~3.0.1"
  },
  "engines": {
    "node": ">= 0.10.0"
  },
  "files": [
    "LICENSE",
    "History.md",
    "Readme.md",
    "index.js",
    "lib/"
  ],
  "scripts": {
    "test": "mocha --require test/support/env --reporter spec --bail --check-leaks test/ test/acceptance/",
    "test-ci": "istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --require test/support/env --reporter spec --check-leaks test/ test/acceptance/",
    "test-cov": "istanbul cover node_modules/mocha/bin/_mocha -- --require test/support/env --reporter dot --check-leaks test/ test/acceptance/",
    "test-tap": "mocha --require test/support/env --reporter tap --check-leaks test/ test/acceptance/"
  },
  "gitHead": "ef7ad681b245fba023843ce94f6bcb8e275bbb8e",
  "bugs": {
    "url": "https://github.com/strongloop/express/issues"
  },
  "_id": "express@4.13.3",
  "_shasum": "ddb2f1fb4502bf33598d2b032b037960ca6c80a3",
  "_from": "express@*",
  "_npmVersion": "1.4.28",
  "_npmUser": {
    "name": "dougwilson",
    "email": "doug@somethingdoug.com"
  },
  "maintainers": [
    {
      "name": "tjholowaychuk",
      "email": "tj@vision-media.ca"
    },
    {
      "name": "jongleberry",
      "email": "jonathanrichardong@gmail.com"
    },
    {
      "name": "dougwilson",
      "email": "doug@somethingdoug.com"
    },
    {
      "name": "rfeng",
      "email": "enjoyjava@gmail.com"
    },
    {
      "name": "aredridel",
      "email": "aredridel@dinhe.net"
    },
    {
      "name": "strongloop",
      "email": "callback@strongloop.com"
    },
    {
      "name": "defunctzombie",
      "email": "shtylman@gmail.com"
    }
  ],
  "dist": {
    "shasum": "ddb2f1fb4502bf33598d2b032b037960ca6c80a3",
    "tarball": "http://registry.npmjs.org/express/-/express-4.13.3.tgz"
  },
  "directories": {},
  "_resolved": "https://registry.npmjs.org/express/-/express-4.13.3.tgz",
  "readme": "ERROR: No README data found!"
}
```
`package.json`属性说明：
+ name - 包名。

+ version - 包的版本号。

+ description - 包的描述。

+ homepage - 包的官网 url 。

+ author - 包的作者姓名。

+ contributors - 包的其他贡献者姓名。

+ dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。

+ repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。

+ main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。

+ keywords - 关键字

模块卸载：`npm uninstall <moudle name>`
更新模块：`npm update <moudle name>`
创建模块：`npm init`
搜索模块：`npm search <moudle name>`
 ```json
 $ npm init
 This utility will walk you through creating a package.json file.
 It only covers the most common items, and tries to guess sensible defaults.
 
 See `npm help json` for definitive documentation on these fields
 and exactly what they do.
 
 Use `npm install <pkg> --save` afterwards to install a package and
 save it as a dependency in the package.json file.
 
 Press ^C at any time to quit.
 name: (node_modules) runoob                   # 模块名
 version: (1.0.0) 
 description: Node.js 测试模块(www.runoob.com)  # 描述
 entry point: (index.js) 
 test command: make test
 git repository: https://github.com/runoob/runoob.git  # Github 地址
 keywords: 
 author: 
 license: (ISC) 
 About to write to ……/node_modules/package.json:      # 生成地址
 
 {
   "name": "runoob",
   "version": "1.0.0",
   "description": "Node.js 测试模块(www.runoob.com)",
   ……
 }
 
 
 Is this ok? (yes) yes
 
 以上的信息，你需要根据你自己的情况输入。在最后输入 "yes" 后会生成 package.json 文件。
 
 接下来我们可以使用以下命令在 npm 资源库中注册用户（使用邮箱注册）：
 
 $ npm adduser
 Username: mcmohd
 Password:
 Email: (this IS public) mcmohd@gmail.com
 接下来我们就用以下命令来发布模块：
 
 $ npm publish
 如果你以上的步骤都操作正确，你就可以跟其他模块一样使用 npm 来安装。
 ```
 版本号
 使用 NPM 下载和发布代码时都会接触到版本号。NPM 使用语义版本号来管理代码，这里简单介绍一下。
 
 语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。
 
 如果只是修复bug，需要更新Z位。
 如果是新增了功能，但是向下兼容，需要更新Y位。
 如果有大变动，向下不兼容，需要更新X位。
 版本号有了这个保证后，在申明第三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。例如"argv": "0.0.x"表示依赖于0.0.x系列的最新版argv。
 
 NPM支持的所有版本号范围指定方式可以查看官方文档。
 
 NPM 常用命令
 除了本章介绍的部分外，NPM还提供了很多功能，package.json里也有很多其它有用的字段。
 
 除了可以在npmjs.org/doc/查看官方文档外，这里再介绍一些NPM常用命令。
 
 NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
 
 NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
 
 使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
 
 在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
 
 使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
 
 使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
 
 使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
 
 使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。
 
 使用淘宝 NPM 镜像
 由于国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。
 
 淘宝 NPM 镜像是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。
 
 你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
 
 $ npm install -g cnpm --registry=https://registry.npmmirror.com
 这样就可以使用 cnpm 命令来安装模块了：
 
 $ cnpm install [name]
 更多信息可以查阅：https://npmmirror.com/。
 如果你遇到了使用 npm 安 装node_modules 总是提示报错：报错: npm resource busy or locked.....。
 
 可以先删除以前安装的 node_modules :
 
 npm cache clean
 npm install
 
 ### REPL
 Node.js REPL(交互式解释器)
 Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Windows 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。
 
 Node 自带了交互式解释器，可以执行以下任务：
 
 读取 - 读取用户输入，解析输入的 Javascript 数据结构并存储在内存中。
 
 执行 - 执行输入的数据结构
 
 打印 - 输出结果
 
 循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出。
 
 Node 的交互式解释器可以很好的调试 Javascript 代码。
 
 开始学习 REPL
 
 我们可以输入以下命令来启动 Node 的终端：
 
 $ node
 > 
 这时我们就可以在 > 后输入简单的表达式，并按下回车键来计算结果。
 
 简单的表达式运算
 接下来让我们在 Node.js REPL 的命令行窗口中执行简单的数学运算：
 
 $ node
 > 1 +4
 5
 > 5 / 2
 2.5
 > 3 * 6
 18
 > 4 - 1
 3
 > 1 + ( 2 * 3 ) - 4
 3
 >
 使用变量
 你可以将数据存储在变量中，并在你需要的时候使用它。
 
 变量声明需要使用 var 关键字，如果没有使用 var 关键字变量会直接打印出来。
 
 使用 var 关键字的变量可以使用 console.log() 来输出变量。
 
 $ node
 > x = 10
 10
 > var y = 10
 undefined
 > x + y
 20
 > console.log("Hello World")
 Hello World
 undefined
 > console.log("www.runoob.com")
 www.runoob.com
 undefined
 多行表达式
 Node REPL 支持输入多行表达式，这就有点类似 JavaScript。接下来让我们来执行一个 do-while 循环：
 
 $ node
 > var x = 0
 undefined
 > do {
 ... x++;
 ... console.log("x: " + x);
 ... } while ( x < 5 );
 x: 1
 x: 2
 x: 3
 x: 4
 x: 5
 undefined
 >
 ... 三个点的符号是系统自动生成的，你回车换行后即可。Node 会自动检测是否为连续的表达式。
 
 下划线(_)变量
 你可以使用下划线(_)获取上一个表达式的运算结果：
 
 $ node
 > var x = 10
 undefined
 > var y = 20
 undefined
 > x + y
 30
 > var sum = _
 undefined
 > console.log(sum)
 30
 undefined
 >
 REPL 命令
 ctrl + c - 退出当前终端。
 
 ctrl + c 按下两次 - 退出 Node REPL。
 
 ctrl + d - 退出 Node REPL.
 
 向上/向下 键 - 查看输入的历史命令
 
 tab 键 - 列出当前命令
 
 .help - 列出使用命令
 
 .break - 退出多行表达式
 
 .clear - 退出多行表达式
 
 .save filename - 保存当前的 Node REPL 会话到指定文件
 
 .load filename - 载入当前 Node REPL 会话的文件内容。
 
 停止 REPL
 前面我们已经提到按下两次 ctrl + c 键就能退出 REPL:
 
 $ node
 >
 (^C again to quit)
 >
 
 ### Node.js回调函数 
node.js异步编程的直接体现就是回调。
异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。
回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。
例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。
回调函数一般作为函数的最后一个参数出现：
>function foo1(name,age,callback){}
>function foo2(value,callback1,callback2){}
```js
// // 阻塞代码示例
// const fs = require("fs");
// let data = fs.readFileSync("E:/js基础学习/node基础.js/textfile/input.txt");

// console.log(data.toString());
// console.log("程序执行结束!");

/* 
非阻塞代码实例
创建一个文件 input.txt ，内容如下：

菜鸟教程官网地址：www.runoob.com
创建 main.js 文件, 代码如下： 
*/

let fs = require("fs");

fs.readFile("E:/js基础学习/node基础.js/textfile/input.txt", function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");
```
## express框架
Express 简介
Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。

使用 Express 可以快速地搭建一个完整功能的网站。

Express 框架核心特性：

* 可以设置中间件来响应 HTTP 请求。
* 定义了路由表用于执行不同的 HTTP 请求动作。
* 可以通过向模板传递参数来动态渲染 HTML 页面。

安装 Express
安装 Express 并将其保存到依赖列表中：

`$ cnpm install express --save`
以上命令会将 Express 框架安装在当前目录的 node_modules 目录中， node_modules 目录下会自动创建 express 目录。以下几个重要的模块是需要与 express 框架一起安装的：

* body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。

* cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。

* multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

`$ cnpm install body-parser --save`
`$ cnpm install cookie-parser --save`
`$ cnpm install multer --save`
安装完后，我们可以查看下 express 使用的版本号：

$ cnpm list express
/data/www/node
└── express@4.15.2  -> /Users/tianqixin/www/node/node_modules/.4.15.2@express

请求和响应
Express 应用使用回调函数的参数： request 和 response 对象来处理请求和响应的数据。

app.get('/', function (req, res) {
   // --
})
request 和 response 对象的具体介绍：

Request 对象 - request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。常见属性有：

req.app：当callback为外部文件时，用req.app访问express的实例
req.baseUrl：获取路由当前安装的URL路径
req.body / req.cookies：获得「请求主体」/ Cookies
req.fresh / req.stale：判断请求是否还「新鲜」
req.hostname / req.ip：获取主机名和IP地址
req.originalUrl：获取原始请求URL
req.params：获取路由的parameters
req.path：获取请求路径
req.protocol：获取协议类型
req.query：获取URL的查询参数串
req.route：获取当前匹配的路由
req.subdomains：获取子域名
req.accepts()：检查可接受的请求的文档类型
req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
req.get()：获取指定的HTTP请求头
req.is()：判断请求头Content-Type的MIME类型
Response 对象 - response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。常见属性有：

res.app：同req.app一样
res.append()：追加指定HTTP头
res.set()在res.append()后将重置之前设置的头
res.cookie(name，value [，option])：设置Cookie
opition: domain / expires / httpOnly / maxAge / path / secure / signed
res.clearCookie()：清除Cookie
res.download()：传送指定路径的文件
res.get()：返回指定的HTTP头
res.json()：传送JSON响应
res.jsonp()：传送JSONP响应
res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
res.redirect()：设置响应的Location HTTP头，并且设置状态码302
res.render(view,[locals],callback)：渲染一个view，同时向callback传递渲染后的字符串，如果在渲染过程中有错误发生next(err)将会被自动调用。callback将会被传入一个可能发生的错误以及渲染后的页面，这样就不会自动输出了。
res.send()：传送HTTP响应
res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
res.set()：设置HTTP头，传入object可以一次设置多个头
res.status()：设置HTTP状态码
res.type()：设置Content-Type的MIME类型

静态文件
Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。

你可以使用 express.static 中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript 文件放在 public 目录下，你可以这么写：

app.use('/public', express.static('public'));
我们可以到 public/images 目录下放些图片,如下所示：

node_modules
server.js
public/
public/images
public/images/logo.png