let arr = [
	[1,1,1,1,1,1,1,1,1,1],
	[0,0,0,1,0,0,0,1,1,1],
	[1,0,1,1,0,1,0,1,1,1],
	[1,0,1,1,0,1,0,1,1,1],
	[1,0,0,0,0,1,0,1,1,1],
	[1,0,1,1,1,1,0,1,1,1],
	[1,0,1,1,0,0,0,1,1,1],
	[1,0,1,1,0,1,1,1,1,1],
	[1,0,1,1,0,0,0,0,0,0],
	[1,1,1,1,1,1,1,1,1,1]
]
const dom = document.querySelectorAll('.div div');
function showMap(arr){
	let count = 0;
	arr.forEach(item=>{
		for(let i=0;i<item.length;i++){
			if(item[i]!=0){
				dom[count].setAttribute('style','background:red')
			}
			if(item[i]==2){
				dom[count].setAttribute('style','background:yellow');
			}
			count++;
		}
	})
}

function findRout(arr,x,y){
	arr[x][y]=2
	console.log(arr);
	if(arr[8][9]==2){
		return arr;
	}
	if(arr[x+1][y]==0){
		return findRout(arr,x+1,y)
	}
	if(arr[x][y+1]==0){
		return findRout(arr,x,y+1)
	}
	if(arr[x][y-1]==0){
		return findRout(arr,x,y-1)
	}
	if(arr[x-1][y]==0){
		return findRout(arr,x-1,y)
	}
	if(arr[x+1][y]==1&&arr[x][y+1]==1&&arr[x][y-1]==1){
		arr[x][y]=1;
		return findRout(arr,x-1,y)
	}
	if(arr[x-1][y]==1&&arr[x][y+1]==1&&arr[x][y-1]==1){
		arr[x][y]=1;
		return findRout(arr,x+1,y)
	}
	if(arr[x+1][y]==1&&arr[x-1][y]==1&&arr[x][y-1]==1){
		arr[x][y]=1;
		return findRout(arr,x,y-1)
	}
	if(arr[x+1][y]==1&&arr[x][y+1]==1&&arr[x-1][y]==1){
		arr[x][y]=1;
		return findRout(arr,x,y+1)
	}
}
let x=1,y=0;
arr=findRout(arr,x,y);
showMap(arr);