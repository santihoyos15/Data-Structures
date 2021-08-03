class HashTable {
    constructor(size){
        this.data = new Array(size);
    } 

    hashMethod(key){ //Variations of this method can be found on GitHub.
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value){
        const address = this.hashMethod(key); //Creating an index to store the key value pair.
        if (!this.data[address]){ //Checking whether the address exists or not.
            this.data[address] = []; 
        }
            this.data[address].push([key, value]);

        return this.data;
    }

    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address]; //Getting the list[] of key, value lists[].
        if (currentBucket){
            for (let i = 0; i < currentBucket.length; i++){
                if (currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return null;
    }

}

const myHash = new HashTable(50);

myHash.set("Santiago", 19);
myHash.set("Vanessa", 23);
const value = myHash.get("Santiago");
const value2 = myHash.get("Vanessa");
console.log(value, value2);