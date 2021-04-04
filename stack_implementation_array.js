class Stack{
    constructor(value){
        this.values = [value];
        this.length = this.values.length;
    }
    push(value){
        this.values.push(value);
        this.length++;
    }
    pop(){
        delete this.values[this.length-1];
    }
    peek(){
        console.log(this.values[this.length-1]);
    }
}

const newStack = new Stack(10);
newStack.peek();
newStack.push("hahaha")
newStack.peek();