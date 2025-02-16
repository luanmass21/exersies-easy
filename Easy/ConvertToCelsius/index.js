
// Faça um programa que leia do usuário uma temperatura em Fahrenheit,
//  converta-a para graus Celsius 
// e escreva o novo valor na tela. A fórmula de conversão de Fahrenheit (F) 
// para Celsius é C = ( ( F - 32 ) * 5 ) / 9. Exemplo: 100 Fahrenheit = 37,77 Celsius.

function changeTemp() {
    const Fahrenheit = prompt("Insira a temperatura em Farenheit:")
    const celsius = (Fahrenheit - 32) * 5/9 

    alert("Graus em celsius: " + celsius.toFixed(3))

    
}

changeTemp()