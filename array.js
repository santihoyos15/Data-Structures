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
        const lastItem = this.length - 1;
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift(){
        const firstItem = this.data["0"];

        for (let i = 0; i < this.length; i++){
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
}

const nums = new MyArray();

nums.push(1);
nums.push(2);
nums.push(3);
nums.push(4);
nums.push(5);
nums.push(6);
nums.push(7);
nums.unshift(0);

for (let i = 0; i < nums.length; i++){
    let element = nums.get(i);
    console.log(element);
}