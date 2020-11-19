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

var year = 2003

if ((year % 4 === 0 && year % 100 > 0)|| (year % 400 === 0)){
  console.log(year + "est une année bissextile");
} else {
  console.log(year + "n'est pas une année bissextile")
  } 