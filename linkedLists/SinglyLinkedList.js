class SinglyLinkedList {
    constructor(value){
        this.head = new Node(value);

        this.tail = this.head; //Assigning tail to head. 

        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
            
        this.tail.next = newNode; //tail.next pointing to newNode.
        this.tail = newNode; //Now, newNode is the tail.
        
        this.length++;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head; 
        this.head = newNode;
        this.length++;
    }

    insert(value, index){
        if (index > this.length - 1 ){// If the given index overflows, we append.
            console.log("Appending to last position");
            return this.append(value);
        }else if (index == 0){//Or we prepend.
            return this.prepend(value);
        }
        const newNode = new Node(value);
        const currentNode = this.getNode(index - 1); //Getting the left node
        const temp = currentNode.next; //Storing temporarily the next node in order to be pointed at from the new node. (Avoiding garbage collector).
        currentNode.next = newNode; //currentNode.next pointing to newNode.
        newNode.next = temp;    //newNode.next pointing to temp;    
        this.length++;
    }

    remove(index){
        if (index > 0 && index < this.length - 1){ //Making sure it is neither the first index nor the last.
            const left = this.getNode(index - 1);
            const currentNode = left.next;
            const right = currentNode.next;
            
            currentNode.next = null; //deleting currentNode(The one being deleted) pointer to next node.
            left.next = right; //Not pointing anymore to currentNode, instead, pointing to right.
            
        }else if(index == 0){// Deleting the head and replacing it.
            const head = this.head;
            const next = head.next;
            
            head.next = null;
            this.head = next;
        }else if(index == this.length - 1){ //Deleting the tail and replacing it.
            const left = this.getNode(index - 1);
            left.next = null;
            this.tail = left;
        }else{
            console.error("Invalid index");
            return null;
        }
        this.length--;
    }
    //<-- HELPER METHODS -->
        getNext(node){
        return node.next;
    }

    getNode(index){
        let currentNode = this.head;
        let counter = 0;
        while (counter != index) {
            currentNode = this.getNext(currentNode);
            counter++;
        }
        return currentNode;
    }

    showAll(){
        let currentNode;
        let position = 0;
        do {
            if (position == 0){ //Checks if it's the first iteration.
                currentNode = this.head; //currentNode is where we store every node we traverse by.
            }else{
                currentNode = this.getNext(currentNode); //It's not the first iteration, so we get the next node.
            }    
            console.log(currentNode.value);
            position++;
        }while(currentNode.next);
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const myList = new SinglyLinkedList(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5)
myList.append(6);
myList.insert(3, 2);
myList.showAll();