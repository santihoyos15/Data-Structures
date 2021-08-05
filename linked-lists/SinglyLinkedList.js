class SinglyLinkedList {
    constructor(value){
        this.head = new Node(value);

        this.tail = this.head; //Assigning tail to head. 

        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
            
        this.tail.next = newNode; //tail.next pointing to newNode
        this.tail = newNode; //Now, newNode is the tail.
        
        this.length++;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head; 
        this.head = newNode;
        this.length++;
    }

    insert(value){
        
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}