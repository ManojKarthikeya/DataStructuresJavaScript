class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    dequeue(){

    }
    enqueue(value){
        const newNode = new Node()
        newNode.value = value;
        newNode.next = this.top;
        if (this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            this.top = newNode;
        }
        
    }
    peek(){
        console.log(this.top);
    }
}