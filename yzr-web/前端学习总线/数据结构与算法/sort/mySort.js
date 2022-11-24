exports default Ysort = {
	bubbleSort:(arr)=>{
		for(let i=0;i<arr.length-1;i++){
			for(let j=1;j<arr.length;j++){
				let temp;
				if(arr[j-1]>arr[j]){
					temp = arr[j-1];
					arr[j-1]=arr[j];
					arr[j] = temp;
				}
			}
		}
		return arr;
	},
	selectSort:(arr)=>{
		for(let i=0;i<arr.length-1;i++){
			for(let j=i+1;j<arr.length;j++){
				if(arr[i]>arr[j]){
					let temp = arr[i];
					arr[i]=arr[j];
					arr[j]=temp;
				}
			}
		}
		return arr;
	},
	insertSort:(arr)=>{
		for(let i=1;i<arr.length;i++){
			let flag = arr[i];
			for(let j=i;j>0;j--){
				if(flag<arr[j-1]){
					arr[j] = arr[j-1];
					arr[j-1]=flag;
				}
				else{
					continue;
				}
			}
		}
		return arr;
	},
	hillSort:(arr)=>{
		for(let gap = Math.floor(arr.length/2);gap>0;gap=Math.floor(gap/2)){
			for(let i=gap;i<arr.length;i++){
				let flag = arr[i];
				for(let j=i;j>0;j-=gap){
					if(flag<arr[j-gap]){
						arr[j]=arr[j-gap];
						arr[j-gap]=flag;
					}
				}
			}
		}
		return arr;
	},
}