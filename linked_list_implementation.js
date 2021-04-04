class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next:null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this;
    }
    
    printlist(){
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    }

    insert(index, value){
        const newNode = new Node(value);
        let currentNode = this.head;
        for(let i=0; i<index-1; i++){
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        }
    
    remove(index){
        let currentNode = this.head;
        for(let i=0;i<index-1;i++){
            currentNode = currentNode.next;
        }
        currentNode.next = currentNode.next.next;
        this.length--;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(15);
myLinkedList.prepend(1);
myLinkedList.append(77);
myLinkedList.insert(1,5);
myLinkedList.insert(2,99);
myLinkedList.remove(2);
myLinkedList.printlist();
console.log(myLinkedList);