// Criar uma função que verifica se um número é par ou ímpar.


function number(n){
    if(n % 2 == 0){
        alert('Number is even')
    }else{
        alert('Number is odd')

    }

}

number(prompt("Say a number to see if is even or odd:"))