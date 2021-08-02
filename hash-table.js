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
    
}

const myHash = new HashTable(50);

