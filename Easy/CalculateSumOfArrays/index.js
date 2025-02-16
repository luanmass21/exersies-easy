// Calculate sum of arrays
// Criar uma função que calcula a soma de um array de números.

const array = ["31", '28', '12', '9', '11']


function sumArray(){
  const sum = array.reduce((sum, n)=> {
    return sum + Number(n)
 }, 0)
 

 console.log(sum)

}
sumArray()