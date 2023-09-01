// Calculadora de média 
const obj = {
    arr : [],
    media: function() {
        let somaTotal = this.arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let media = somaTotal / this.arr.length;
        console.log(`Média simples dos números: ${media}`);
    }
}

obj.arr = [1, 2, 3, 4, 5, 6];
obj.media();