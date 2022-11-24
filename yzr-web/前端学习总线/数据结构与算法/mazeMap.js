let arr = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]

const dom = document.querySelector('.con');
// dom.appendChild('div')
function displayMap(arr){
	for(let i=0;i<arr.length;i++){
		for(let j=0;j<arr.length;j++){
			if(arr[i][j]==1){
				let wall = document.createElement('div')
				wall.style.background='#33778a'
				// wall.style.border='1px solid black'
				dom.append(wall)
			}
			if(arr[i][j]==0){
				let wall = document.createElement('div')
				wall.style.background='white'
				// wall.style.border='1px solid black'
				dom.append(wall)
			}
			if(arr[i][j]==2){
				let wall = document.createElement('div')
				wall.style.background='green'
				// wall.style.border='1px solid black'
				dom.append(wall)
			}
		}
	}
}
function setMap(arr){
	for(let i=1;i<arr.length-1;i++){
		for(let j=1;j<arr.length-1;j++){
			if(i%3==2){
				arr[i][j]=0;
			}
			if(j%3==2){
				arr[i][j]=0;
			}
			if(i%3==2&&j%3==2){
				arr[i][j]=1;
			}
		}
	}
	for(let i=2;i<arr.length-2;i+=2){
		for(let j=2;j<arr.length-2;j+=2){
			if(arr[i][j]==0){
				let der = Math.floor(Math.random()*4);
				if(der==0&&i-2!=0&&arr[i-1]!=0){
					arr[i-1][j]=0;
					arr[i][j-1]=0;
					arr[i][j+1]=0;
					arr[i-2][j]=0;
				}
				if(der==1&&i+2!=9&&arr[i+1]!=0){
					arr[i+1][j]=0;
					arr[i][j+1]=0;
					arr[i][j-1]=0;
					arr[i+2][j]=0;
				}
				if(der==2&&j-2!=0&&arr[j-1]!=0){
					arr[i][j-1]=0;
					arr[i][j+1]=0;
					arr[i-1][j]=0;
					arr[i][j-2]=0
				}
				if(der==3&&j+2!=9&&arr[j+1]!=0){
					arr[i][j+1]=0;
					arr[i][j-1]=0;
					arr[i+1][j]=0;
					arr[i][j+2]=0;
				}
				console.log(arr[i][j]);
			}
		}
	}
}
function findRout(arr,x,y){
	arr[x][y]=2
	console.log(arr);
	if(arr[18][19]==2){
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
setMap(arr);
arr=findRout(arr,1,0);
console.log(arr);
displayMap(arr)