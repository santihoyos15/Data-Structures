class doublyLinkedList {
    constructor(){
        this.head = null;

        this.tail = null; //Assigning tail to head. 

        this.length = 0;
    }

    
}

class Node {
    constructor(value){
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}