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

    prepend(value){
        if (this.head == null){
            return this.append(value);
        }else{
            const newNode = new Node(value);

            const oldHead = this.head;
            oldHead.previous = newNode;
            newNode.next = oldHead;
            this.head = newNode;
        }
        return ++this.length;
    }

    insert(value, index){
        
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}