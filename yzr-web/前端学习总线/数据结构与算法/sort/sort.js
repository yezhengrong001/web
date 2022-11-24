let arr = [4,6,8,7,9,2,10,1,5];

// 冒泡排序 两相邻元素交换 小的靠前 逐次变换
// for(let i=0;i<arr.length-1;i++){
// 	for(let j=1;j<arr.length;j++){
// 		let temp;
// 		if(arr[j-1]>arr[j]){
// 			temp = arr[j-1];
// 			arr[j-1]=arr[j];
// 			arr[j] = temp;
// 		}
// 	}
// }

// 选择排序
// for(let i=0;i<arr.length-1;i++){
// 	for(let j=i+1;j<arr.length;j++){
// 		if(arr[i]>arr[j]){
// 			let temp = arr[i];
// 			arr[i]=arr[j];
// 			arr[j]=temp;
// 		}
// 	}
// }

// for(let i=0;i<arr.length-1;i++){
// 	let min = arr[i];
// 	let index = 0;
// 	for(let j=i+1;j<arr.length;j++){
// 		if(min>arr[j]){
// 			min = arr[j];
// 			index = j;
// 		}
// 	}
// 	arr[index] = arr[i];
// 	arr[i] = min;
// }

// for(let i=0;i<arr.length-1;i++){
// 	let index = i;
// 	for(let j=i+1;j<arr.length;j++){
// 		if(arr[index]>arr[j]){
// 			index = j;
// 		}
// 	}
// 	let min = arr[index];
// 	arr[index] = arr[i];
// 	arr[i] = min;
// }

// 插入排序 将数据分为两组 未排序和排序
// for(let i=1;i<arr.length;i++){
// 	let flag = arr[i];
// 	for(let j=i;j>0;j--){
// 		if(flag<arr[j-1]){
// 			arr[j] = arr[j-1];
// 			arr[j-1]=flag;
// 		}
// 		else{
// 			continue;
// 		}
// 	}
// }

// 希尔排序 插入排序的升级版 添加了一个增量
// 如 9 1 2 5 7 4 8 6 3 5
// 第一趟 gap=5 4 1 2 3 5 9 8 6 5 7
// 第二趟 gap=2 2 1 4 3 5 6 5 7 8 9
// 第三趟 gap=1 1 2 3 4 5 5 6 7 8 9
// for(let gap = Math.floor(arr.length/2);gap>0;gap=Math.floor(gap/2)){
// 	for(let i=gap;i<arr.length;i++){
// 		let flag = arr[i];
// 		for(let j=i;j>0;j-=gap){
// 			if(flag<arr[j-gap]){
// 				arr[j]=arr[j-gap];
// 				arr[j-gap]=flag;
// 			}
// 		}
// 	}
// }

// 递归 函数
// 1.求斐波那契数列的和
// function sum(n){
// 	if(n<=0){
// 		return 0;
// 	}
// 	return sum(n-1)+n;
// }

// function feibonacie(n){
// 	if(n==1||n==0){
// 		return 1
// 	}
// 	else{
// 		return feibonacie(n-1)+feibonacie(n-2);
// 	}
// }
// console.log(feibonacie(3));

// 5 归并排序
// function mergeSort(arr){
// 	let len = arr.length;
// 	if(len<2){
// 		return arr;
// 	}
// 	let middle = Math.floor(len/2);
// 	let left = arr.slice(0,middle),
// 		right = arr.slice(middle);
// 	return merge(mergeSort(left),mergeSort(right));
// }

// function merge(left,right){
// 	let result=[];
	
// 	while(left.length&&right.length){
// 		if(left[0]<=right[0]){
// 			result.push(left.shift());
// 		}
// 		else{
// 			result.push(right.shift());
// 		}
// 	}
// 	while(left.length){
// 		result.push(left.shift());
// 	}
// 	while(right.length){
// 		result.push(right.shift());
// 	}
// 	return result;
// }
// arr = mergeSort(arr);

// 快速排序 冒泡排序的改版 分组 选定一个哨兵比他大的放一组，比他小的放一组
function quickSort(arr){
	if(arr.length<2){
		return arr;
	}
	let left = [];
	let right = [];
	let flag = arr[0]
	for(let i=1;i<arr.length;i++){
		if(arr[i]>flag){
			right.push(arr[i]);
		}else{
			left.push(arr[i]);
		}
	}
	return quickSort(left).concat([flag],quickSort(right))
}
arr=quickSort(arr);
console.log(arr)

// 示例
// const testArr = [
//   "s",
//   0,
//   false,
//   undefined,
//   Symbol(),
//   function () {},
//   123n,
//   null,
//   {},
//   [],
//   new Date(),
//   new Map(),
//   new Set(),
//   /a/,
// ];
/*
得到的结果：
 [
    'string',  'number',
    'boolean', 'undefined',
    'symbol',  'function',
    'bigint',  'null',
    'object',  'array',
    'date',    'map',
    'set',     'regExp'
  ]
*/
// function getType(data) {
//   // TODO：待补充代码
//   // typeof 只能判断基本属性
//   // Object.protype.toString.call(data).slice(8,-1) //判断基础属性和引用属性
//   console.log(Object.prototype.toString.call(data).slice(8,-1));
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
// }
// const result = testArr.map((item) => getType(item));
// console.log("得到的结果：", result);
// console.log(typeof arr)