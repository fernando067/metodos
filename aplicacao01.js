// Juntar arrays 
const obj = {
    array1 : [1, 2, 3],
    array2 : [1, 2, 3],
    juntar: function(a1, a2) {
        let arrayF = this.array1.concat(this.array2) 
        console.log(`Array 1: ${this.array1}`);
        console.log(`Array 2: ${this.array2}`);
        console.log("Array final:");
        console.log(arrayF);
    }
}

obj.juntar()