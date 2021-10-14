class DoublyLinkedList {
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
        if (this.head == null){ //Check whether the head is empty or not.
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
        if (index > this.length - 1){
            return this.append(value);
        }else if(index == 0){
            return this.prepend(value);
        }
        const newNode = new Node(value);
        const currentNode = this.getNode(index);
        const left = currentNode.previous;
        //Left and current pointers pointing to new node.
        left.next = newNode;
        currentNode.previous = newNode;
        //NewNode left and right pointers pointing to left and current respectively. 
        newNode.previous = left;
        newNode.next = currentNode;

        this.length++;
        return newNode.value;
    }

    getNode(index){
        const middlePoint = Math.floor(this.length / 2);

        if(index > this.length - 1){//Makes sure the index don't overflow.
            return null;
        }
        else if (index < middlePoint){ //Checks whether the index given is closer to the head or the tail.
            let currentNode = this.head;
            let counter = 0;
                while(counter != index){ //Runs until it gets to the index given. 
                    currentNode = currentNode.next;
                    counter++;
                }
            return currentNode;
        }else if(index >= middlePoint){ //Same, but includes the middlePoint.
            let currentNode = this.tail;
            let counter = this.length - 1; //Last index
            while(counter != index){
                currentNode = currentNode.previous;
                counter--;
            }
            return currentNode;
        }
    }

    get(index){
        return this.getNode(index).value;
    }

    remove(index){
        if(index > 0 && index < this.length - 1){ //Index who are between index 0 and this.length - 1;
            const nodeToDelete = this.getNode(index);
            const nodeToDeleteValue =nodeToDelete.value;
            const previous = nodeToDelete.previous;
            const next = nodeToDelete.next;

            previous.next = next;
            next.previous = previous;
            nodeToDelete.previous = null;
            nodeToDelete.next = null;
            this.length--;
            return nodeToDeleteValue;
            
        }else if (index == 0 && this.length != 1){ //When we want to delete the head.
            const nodeToDeleteValue = this.head.value;
            const newHead = this.head.next; //Temporarily storing new head
            newHead.previous = null;
            this.head.next = null;
            this.head = newHead;
            this.length--;
            return nodeToDeleteValue;
        }else if (index == 0 && this.length == 1) {
            const nodeToDeleteValue = this.head.value;
            this.head = null;
            this.length--;
            return nodeToDeleteValue;
        }else if (index == this.length - 1){ //When we want to delete the tail.
            const nodeToDeleteValue = this.tail.value;
            const newTail = this.tail.previous;
            newTail.next = null;
            this.tail.previous = null;
            this.tail = newTail;
            this.length--;

            return nodeToDeleteValue;
        }
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}