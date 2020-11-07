/**
EXERCICES & EXPLICATIONS TESTS TECHNIQUE :

CONSIGNE :
You will be given N binary numbers.
Print the decimal sum of the odd numbers.
binaire = base de 2 car on a des 0 & des 1
hexadécimale = base 16 : 0 1 2 3 4 5 6 7 8 9 a b c d e f

La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.
i++ --> i = i+1
 **/
var sumOfNumber = 0;
var moduloNumber = 0;

const N = parseInt(readline()); /**définiton d'une constante N, la fonction readline lit la ligne et parseInt la convertie**/
for (let i = 0; i < N; i++) { /**créer une boucle qui va répéter l'opération N fois -> pour i allant de 0 à N, ajouter +1 à i)**/
    const S = readline(); /** constante S = ce qui est lu**/
    let numberDecimal = parseInt(S,2); /**création d'une variable pour convertir la ligne lue en nombre décimal**/
    moduloNumber = numberDecimal % 2;
    if (moduloNumber == 1) {
      sumOfNumber = sumOfNumber + numberDecimal /**sumOfNumber = somme des nombres trouvés précédemment + nombre trouvé à la boucle actuelle**/
    }
}
console.log(sumOfNumber); /**pour afficher le résultat**/

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
CONSIGNE :
Créer une fonction appelé parseToRoman qui, pour un nombre donné, va retourner sa valeur en chiffres romains.

On rappelle la valeur des chiffres romains :
I=1 V=5 X=10 L=50 C=100 D=500 M=1000
on écrit les symboles du plus grand au plus petit et ils peuvent s'additionner mais si il y 4 fois la meme valeur de suite alors on utilise la notion soustractive en retranchant à la valeur supérieure 1
traiter des nombres à partir de 1 (pour l'anecdote les romains ne connaissaient pas le 0)

**/

function parseToRoman(number) {
  numberOfThousand = parseInt(number/1000)
  moduloNumber = number % 1000

  numberOfFiveHundred = parseInt(moduloNumber/500)
  moduloNumber = moduloNumber % 500

  numberOfHundred = parseInt(moduloNumber/100)
  moduloNumber = moduloNumber % 100

  numberOfFifty = parseInt(moduloNumber/50)
  moduloNumber = moduloNumber % 50

  numberOfTen = parseInt(moduloNumber/10)
  moduloNumber = moduloNumber % 10

  numberOfFive = parseInt(moduloNumber/5)
  moduloNumber = moduloNumber % 5

  numberOfOne = parseInt(moduloNumber/1)
  moduloNumber = moduloNumber % 1

  var output = "M".repeat(numberOfThousand)
  output += "D".repeat(numberOfFiveHundred)
  output += "C".repeat(numberOfHundred)
  output += "L".repeat(numberOfFifty)
  output += "X".repeat(numberOfTen)
  output += "V".repeat(numberOfFive)
  output += "I".repeat(numberOfOne)

  console.log(output)
}


parseToRoman(1234); // === "MCCXXXIV"
parseToRoman(4); // === "IV"
parseToRoman(37); // === "XXXVII"
parseToRoman(143); // === "CXLIII"


CONSIGNE :

On va faire notre petite machine de Turing et on va craquer un algorithme de chiffrement. Nous allons donc essayer de craquer ce qu’on appelle le ROT13 (ou Rotate By 13 Places). L’idée est de décaler chacune des lettres de l’alphabet de 13 places. Autrement dit, le H devient le U, le E devient le R, etc.

function transformToRot13(stringToTransform) {
}

toRot13('URYYB JBEYQ'); // HELLO WORLD
toRot13('BCRAPYNFFEBBZF'); // OPENCLASSROOMS
toRot13('PRPV RFG ZBA PBQR FRPERG'); // CECI EST MON CODE SECRET
