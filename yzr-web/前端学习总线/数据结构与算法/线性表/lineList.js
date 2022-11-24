class Stack{
	constructor(size){
		this.stack = new Array();
		this.len = 0;
		this.size = size;
	}
	isEmpty(){
		if(this.stack.size==0){
			return true;
		}
		return false;
	}
	isFull(){
		if(this.stack.size==this.size){
			return true;
		}
		return false;
	}
	pushStack(item){
		if(!this.isFull()){
			this.len++;
			return this.stack.push(item);
		}
		else{
			console.warn('栈满');
			return -1;
		}
	}
	popStack(){
		if(!this.isEmpty()){
			this.len--
			return this.stack.pop();
		}
		else{
			console.warn('栈空');
			return -1;
		}
	}
}
let numarr = [4,5,6,'*','+',1,'+'];
let numStack = new Stack(numarr.length);

for(let i=0;i<numarr.length;i++){
	if(/[0-9]/.test(numarr[i])){
		numStack.pushStack(numarr[i])
	}
	else{
		if(numarr[i] == '+'){
			numStack.pushStack(numStack.popStack() + numStack.popStack())
		}
		else if(numarr[i] == '-'){
			numStack.pushStack(numStack.popStack() - numStack.popStack())
		}
		else if(numarr[i] == '*'){
			numStack.pushStack(numStack.popStack() * numStack.popStack())
		}
		else{
			numStack.pushStack(numStack.popStack() / numStack.popStack())
		}
	}
}
console.log(numStack.popStack());