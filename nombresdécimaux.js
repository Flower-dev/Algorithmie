/*
CONSIGNE :
You will be given N binary numbers.
Print the decimal sum of the odd numbers.
binaire = base de 2 car on a des 0 & des 1
hexadécimale = base 16 : 0 1 2 3 4 5 6 7 8 9 a b c d e f

La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.
i++ --> i = i+1
*/

var sumOfNumber = 0;
var moduloNumber = 0;

const N = parseInt(readline()); /*définiton d'une constante N, la fonction readline lit la ligne et parseInt la convertie*/
for (let i = 0; i < N; i++) { /*créer une boucle qui va répéter l'opération N fois -> pour i allant de 0 à N, ajouter +1 à i)*/
    const S = readline(); /*constante S = ce qui est lu*/
    let numberDecimal = parseInt(S,2); /*création d'une variable pour convertir la ligne lue en nombre décimal*/
    moduloNumber = numberDecimal % 2;
    if (moduloNumber == 1) {
      sumOfNumber = sumOfNumber + numberDecimal; /**sumOfNumber = somme des nombres trouvés précédemment + nombre trouvé à la boucle actuelle*/
    }
}
console.log(sumOfNumber); /*pour afficher le résultat*/

