// async await 用法 同步的方式实现异步
// async function test(){
// 	return 'async'
// }

// let x = test();
 
//  console.log(x)
 
//  x.then((value)=>{
// 	 console.log('value',value)
//  },(err)=>{
// 	 console.log(err);
//  })
 
//  async function getOne(){
// 	 return "getone"
//  }
//  async function getTwo(){
// 	 return Promise.resolve("getTwo")
//  }
//  // await 接一个promise对象，获取其中的值
//  async function san(){
// 	 let v1=await getOne();
// 	 let v2 = await getTwo();
// 	 console.log('san',v1,v2)
//  }
//  san();

