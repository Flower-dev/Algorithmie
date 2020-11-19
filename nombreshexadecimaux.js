
/*
CONSIGNE : 
convertir les nombres hexadécimaux de la liste N en nombres binaires et additionner tous les nombres pairs entre eux
*/

var moduloNumber = 0;
var sumOfNumber = 0;

const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  const S = readline();
  let numberDecimal = parseInt(S,16);
  moduloNumber = numberDecimal % 2;
  if (moduloNumber == 0){
    sumOfNumber = sumOfNumber + numberDecimal
  }
}
console.log(sumOfNumber)