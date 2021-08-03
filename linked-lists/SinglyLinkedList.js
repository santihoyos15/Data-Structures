class SinglyLinkedList {
    constructor(data){
        this.head = new Node(data);

        this.tail = this.head; //Assigning tail to head. 

        this.length = 1;
    }
}