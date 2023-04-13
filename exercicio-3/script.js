function ePalindromo(str){
    let palavraInvertida = str.split('').reverse().join(' ');
    palavraInvertida = palavraInvertida.replace(/\s+/g, '');
    return palavraInvertida === str;
}

console.log(ePalindromo('arara'));