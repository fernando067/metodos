// Somar os números pares de dois vetores 
const obj = {
    arr1 : [],
    arr2 : [],

    soma: function() { 
        let somaPares = this.arr1.filter(num => num % 2 === 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0) 
        + this.arr2.filter(num => num % 2 === 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        console.log(`Resultado da soma dos números pares dos 2 vetores: ${somaPares}`);
    }
}

obj.arr1 = [1, 2, 2]
obj.arr2 = [1, 2, 2]
obj.soma()