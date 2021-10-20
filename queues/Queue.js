class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.length == 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            const holdingPointer = this.last;
            holdingPointer.next = newNode;
            this.last = newNode;
        }

        this.length++;
    }

    dequeue(){// Not working
        if(this.length == 1){
            this.last == null;
        }
        const nodeToDelete = this.first; 
        this.first = nodeToDelete.next;
        nodeToDelete.next = null;
        this.length--;
        return nodeToDelete.value;
    }

    peek(){
        return this.first;
    }
        
}