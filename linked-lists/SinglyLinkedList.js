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

    getNext(node){
        return node.next;
    }

    insert(value, index){
        if (index > this.length - 1 ){// If the given index overflows, we append.
            console.log("Appending to last position");
            return this.append(value);
        }else if (index == 0){
            return this.prepend(value);
        }
        const newNode = new Node(value);

        let position = 0;
        let currentNode = this.head; //currentNode is where we store every node we traverse by.
        do {
            if (position == index - 1){
                const temp = currentNode.next; //Storing temporarily the next node to link it to the new one
                currentNode.next = newNode; //currentNode.next pointing to newNode.
                newNode.next = temp;    //newNode.next pointing to temp;
                break;
            }
            currentNode = this.getNext(currentNode); //Getting the next node.
            position++;
        }while (currentNode.next) //While currentNode doesn't point to null we are fine.
        this.length++;
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
myList.append(6);

myList.insert(5,4);
myList.showAll();