// screver um código para verificar se uma palavra é um palíndromo (lê-se igual de trás para frente).

function isPalindrome(word) {
    const normalizedWord = word.toLowerCase(); //deixei tudo em minusculo
  
    return normalizedWord === normalizedWord.split('').reverse().join('');
  }
  
  // Testando
  console.log(isPalindrome("arara"));  
  console.log(isPalindrome("hello"));  
  
  