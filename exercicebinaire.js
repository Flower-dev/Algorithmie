Consigne :
You will be given N binary numbers.
Print the decimal sum of the odd numbers.
/**le problème a résoudre : tranformer les nombres binaires d'une suite en nombres décimaux et additionner tous les nombres impairs entre eux**/

var moduloNumber = 0;
var sumOfNumber = 0;

const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  const S = readline();
  let numberDecimal = parseInt(S,2);
  moduloNumber = numberDecimal % 2;
  if (moduloNumber == 1){
    sumOfNumber = sumOfNumber + numberDecimal
  }
}
console.log(sumOfNumber)

/**les bases de ce qui est demandé :
commencer par définir une constante N qui lit une ligne et convertit le en nombre décimal
dire que pour chaque i allant de à N ajouter +1 à i
définir une contante S correspondant au nombre qui a été lu
convertir le nombre lu en décimal passer de la base 2 au décimal
il faut savoir si le nombre trouvé = pair ou impair donc pour cela utiliser la notion de modulo
si la réponse = impair -> additionner le nombre trouvé à la somme faite précédemment

demander le résultat avec la console.log()
**/

Consigne : convertir les nombres hexadécimaux de la liste N en nombres binaires et additionner tous les nombres pairs entre eux

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
