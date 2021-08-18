class LinkedList {
    Node head; 
    int size;

    LinkedList(){
        this.head = null;
        this.size = 0;
    }

    public void append(int data){

        Node newNode = new Node(data);

        if (this.head == null){ //Checks whether the head is empty or not.
            this.head = newNode;
        }
    }
    
    public class Node { //Node class, every node of the linked list will be of Node type.
        int data; //Item inside the node, in this case Int type.
        Node next; //Pointer to the next node.

        Node(int data){
            this.data = data;
            this.next = null;
        }
    }
}