class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift(){
        const firstItem = this.data["0"];

        for (let i = 0; i < this.length; i++){ // i < this.length - 1 might do it better.
            let rightItem = this.data[i + 1];
            this.data[i] = rightItem;
        }

        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    unshift(item){
        this.push(0);

        for (let i = this.length - 1; i > 0; i--){
            let leftItem = this.data[i - 1]; 
            this.data[i] = leftItem;
        }

        this.data[0] = item;

        return this.length;
    }

    delete(index){
        const element = this.data[index];
        for (let i = index; i < this.length; i++){
            let rightElement = this.data[i + 1];
            this.data[i] = rightElement;
            // console.log(this.data[i]);
        }

        delete this.data[this.length -1];
        this.length--;

        return element;
    }

}

const nums = new MyArray();

nums.push(1);
nums.push(2);
nums.unshift(0);
nums.delete(0);