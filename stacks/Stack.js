class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if (!this.top){
            this.top = newNode;
            this.bottom = newNode;
        }
        else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop(){
        const nodeToDelete = this.top;
        const nodeToDeleteValue = nodeToDelete.value;
        if(this.length == 1){
            this.top = null;
            this.bottom = null;
        }else{
            this.top = this.top.next; 
            nodeToDelete.next = null;
        }
        
        this.length--;
        return nodeToDeleteValue;
    }

}
