class doublyLinkedList {
    constructor(){
        this.head = null;

        this.tail = null; //Assigning tail to head. 

        this.length = 0;
    }

    append(value){
        const newNode = new Node(value);

        if (this.head == null){ //Checks if this.head is assigned as null.
            this.head = newNode;
            this.tail = newNode;
        }else{
            const oldTail = this.tail;
            oldTail.next = newNode; //Old tail pointing to new node.
            newNode.previous = oldTail;
            this.tail = newNode;
        }
        return ++this.length;
    }

    
}

class Node {
    constructor(value){
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}