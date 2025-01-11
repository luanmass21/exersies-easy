// Faça um programa que leia 3 números, some-os e exiba a média entre eles.

//Faça um programa que leia 3 números e insira-os na tela

function readNumbers(a,b,c) {

    a = parseFloat(prompt("Insert the first number"))
    b = parseFloat(prompt("Insert the second number"))
    c = parseFloat(prompt("Insert the third number"))

    soma = (a + b + c) / 3
  
    alert(`A soma entre os números ${a}+${b}+${c} é: ${soma} `)
  
      
  }
  
  readNumbers()