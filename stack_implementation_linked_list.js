class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(value){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        console.log(this.top.value);
    }
    push(value){
        const newNode = new Node;
        newNode.value = value;
        newNode.next = this.top;
        this.top = newNode;
        if(!this.bottom){
        this.bottom = this.top;
        this.length++;
        }
    }
    pop(){
        this.top = this.top.next;
        this.length--;
    }
}

const myStack = new Stack();
myStack.push("discord");
myStack.push("google");
myStack.push("instagram");
console.log(myStack)
myStack.peek();
myStack.pop()
console.log(myStack)
myStack.peek()
myStack.pop()
console.log(myStack)
myStack.peek()




