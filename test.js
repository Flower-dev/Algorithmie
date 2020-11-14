/*
EXERCICES & EXPLICATIONS TESTS TECHNIQUE :

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

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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


/*
CONSIGNE :
Créer une fonction appelé parseToRoman qui, pour un nombre donné, va retourner sa valeur en chiffres romains.

On rappelle la valeur des chiffres romains :
I=1 V=5 X=10 L=50 C=100 D=500 M=1000
on écrit les symboles du plus grand au plus petit et ils peuvent s'additionner mais si il y 4 fois la meme valeur de suite alors on utilise la notion soustractive en retranchant à la valeur supérieure 1
traiter des nombres à partir de 1 (pour l'anecdote les romains ne connaissaient pas le 0)

*/

function parseToRoman(number) {
  numberOfThousand = parseInt(number/1000)
  moduloNumber = number % 1000

  numberOfNineHundred = parseInt(moduloNumber/900)
  moduloNumber = moduloNumber % 900

  numberOfFiveHundred = parseInt(moduloNumber/500)
  moduloNumber = moduloNumber % 500

  numberOfFourHundred = parseInt(moduloNumber/400)
  moduloNumber = moduloNumber % 400

  numberOfHundred = parseInt(moduloNumber/100)
  moduloNumber = moduloNumber % 100

  numberOfNinety = parseInt(moduloNumber/90)
  moduloNumber = moduloNumber % 90

  numberOfFifty = parseInt(moduloNumber/50)
  moduloNumber = moduloNumber % 50

  numberOfFourty = parseInt(moduloNumber/40)
  moduloNumber = moduloNumber % 40

  numberOfTen = parseInt(moduloNumber/10)
  moduloNumber = moduloNumber % 10

  numberOfNine = parseInt(moduloNumber/9)
  moduloNumber = moduloNumber % 9

  numberOfFive = parseInt(moduloNumber/5)
  moduloNumber = moduloNumber % 5

  numberOfFour = parseInt(moduloNumber/4)
  moduloNumber = moduloNumber % 4

  numberOfOne = parseInt(moduloNumber/1)
  moduloNumber = moduloNumber % 1

  var output = "M".repeat(numberOfThousand) /**pour facilité la lecture et la variable utiliser -> `output +=`**/
  output += "CM" .repeat(numberOfNineHundred)
  output += "D".repeat(numberOfFiveHundred)
  output += "CD" .repeat(numberOfFourHundred)
  output += "C".repeat(numberOfHundred)
  output += "XC" .repeat(numberOfNinety)
  output += "L".repeat(numberOfFifty)
  output += "XL" .repeat(numberOfFourty)
  output += "X".repeat(numberOfTen)
  output += "IX" .repeat(numberOfNine)
  output += "V".repeat(numberOfFive)
  output += "IV" .repeat(numberOfFour)
  output += "I".repeat(numberOfOne)

  console.log(output)
}

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/*
CONSIGNE :

On va faire notre petite machine de Turing et on va craquer un algorithme de chiffrement. Nous allons donc essayer de craquer ce qu’on appelle le ROT13 (ou Rotate By 13 Places). L’idée est de décaler chacune des lettres de l’alphabet de 13 places. Autrement dit, le H devient le U, le E devient le R, etc.

Ajouter 13 à chaque lettre

A <=> N
B <=> O
C <=> P
D <=> Q
E <=> R
F <=> S
G <=> T
H <=> U
I <=> V
J <=> W
K <=> X
L <=> Y
M <=> Z

Pseudo code : faire une fonction dans le but de déchiffrer chacune des lettres du mot ou de la phrase
faire cela lettre par lettre
faire lettre - 13
transformer la chaine de caractère en tableau

Créer une nouvelle variable comprenant stringToTransform
la transformer en tableau


*/
let alphabetChiffre =   "NOPQRSTUVWXYZABCDEFGHIJKLM"; /*input*/
let alphabetDechiffre = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; /*output*/

function transformToRot13(stringToTransform) {
  for (let i=0; i<stringToTransform.length; i++){

    for (let j=0; j<alphabetChiffre.length; j++){
      if (stringToTransform[i] == alphabetChiffre[j]){
        console.log(alphabetDechiffre[j]);
      }
    }

  }
}

transformToRot13('URYYB JBEYQ'); // HELLO WORLD
transformToRot13('BCRAPYNFFEBBZF'); // OPENCLASSROOMS
transformToRot13('PRPV RFG ZBA PBQR FRPERG'); // CECI EST MON CODE SECRET


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/*CONSIGNE 

comment afficher la dernière valeur d'un tableau ? 

Commencer par chercher combien de valeurs il y a dans le tableau avec .length
Pour trouver l'index, il faut faire le nombre trouvé avec .length - 1
*/

let sequenceNumber = [1, 13, 54, 96, 10, 3, 46, 38];

sequenceNumber[sequenceNumber.length - 1];

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/*CONSIGNE 

écrire une fonction pour convertir un nombre de secondes en nombre de minutes
*/


var convertToMinutes = function(secondes){
  
  if (secondes === undefined){
    secondes = 0
  }
 
  return secondes / 60
}

convertToMinutes(3600)
convertToMinutes(50000)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/*CONSIGNE

Déclarer deux variables et assignez leurs des valeurs numériques, en n'utilisant qu'un seul mot-clé var.
*/

var maValeur_1 = 12,
    maValeur_2 = 35;

/*CONSIGNE 

Voici une variable. Ecrivez une condition pour savoir si le contenu de cette variable 
est supérieur à 10. Si tel est le cas, affichez une fenêtre alert() pour en informer l'utilisateur.
*/

var myNumber = 15;

if (myNumber > 10){
	 alert('le nombre est supérieur à 10');
}

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/*CONSIGNE

Ecrivez la condition suivante sour forme de condition ternaire.

var result, number = 42;
			
if (number > 10) {
    result = 'Plus grand que 10';
} else {
    result = 'Plus petit que 10';
}
*/

var result, number = 42;
result = (number > 10) ? 'Plus grand que 10' : 'Plus petit que 10';

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/*CONSIGNE

Afin de jouer avec les opérateurs, et notamment l'opérateur modulo, voici un exercice assez classique : 
déterminer si une année est bissextile.
Pour rappel, une année est bissextile si elle est divisible par 4 sans être divisible par 100 ou si elle est divisible par 400
Pour second rappel, l'opérateur modulo (%) permet d'obtenir le reste d'une division. Si le reste vaut 0, 
c'est que la division est complète : if (8 % 2) { alert("8 est divisible par 2"): }.
*/

var year = 2016;

/*On teste d'abord si l'année est divisible par 4 avec year % 4 === 0 tout en s'assurant que ce n'est pas divisible par 100, 
avec year % 100 > 0. Et avec ||, on regarde si ce n'est quand même pas divisible par 400*/

if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)){
	console.log(year + "est bissextile");
} else {
	console.log(year + "n'est pas bissextile")
	}

var year = 2003

if ((year % 4 === 0 && year % 100 > 0))
