let num = 1
let p = new Promise((resolve,reject)=>{
	if(num == 1){
		resolve(1);
	}else{
		reject(0)
	}
})

p.then((value)=>{
	console.log(value)
},reason=>{
	console.log(reason);
})
async function asyncDemo(){
	let x = await p;
	return x;
}
let demo = asyncDemo();
console.log(demo)
console.log("start");

let re = Promise.resolve(p)
console.log("@",re);
// console.warn("@",re);