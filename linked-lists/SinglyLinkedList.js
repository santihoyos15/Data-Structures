class SinglyLinkedList {
    constructor(value){
        this.head = new Node(value);

        this.tail = this.head; //Assigning tail to head. 

        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
            
        this.tail.next = newNode;
        this.tail = newNode;
        
        this.length++;
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}