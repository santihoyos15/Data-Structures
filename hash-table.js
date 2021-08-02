class HashTable {
    constructor(size){
        this.data = new Array(size);
    } 

    hashMethod(key){
        let hash = 0;
        for (let i = 0; key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value){
        const address = this.hashMethod(key); //Creating an index to store the key value pair.
        
        if (!this.data[address]){ //Checking whether the address exists or not.
            this.data[address] = []; 
        }
        else {
            this.data[address].push([key, value]);
        }

        return this.data;
    }

}

const myHash = new HashTable(50);

