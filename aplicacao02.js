// Números pares/ímpar de um Array 
const obj = {
    arr1 : [],
 
    pares : function() {
        let pares = this.arr1.filter(num => num % 2 === 0);
        console.log("Array apenas com números pares:")
        console.log(pares);
        let impar = this.arr1.filter(num => num % 2 != 0);
        console.log("Array sem números pares:");
        console.log(impar);
    }
}

obj.arr1 = [1, 2, 43, 34]
obj.pares()