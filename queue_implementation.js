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
        if(this.length === 0){
            return null;
        }
        if( this.top === this.bottom){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
    }
    enqueue(value){
        const newNode = new Node(value);
        if (this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    peek(){
        console.log(this.top);
    }
}
const myQueue = new Queue();
