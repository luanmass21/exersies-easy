// Criar uma função que retorna o maior número de um array. → (Math.max(...numbers)


const array = ["31", '28', '12', '9', '11']


function tallNumber() {
    const tallN = Math.max(...array)

    console.log(tallN)
    
}

tallNumber()