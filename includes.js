 /*CONSIGNE

Eliminer les nombres et ne garder que les lettres 

idée de résolution : 
- commencer par lire la ligne 
- faire une fonction qui détermine si la valeur lue par la fonction est une lettre ou un nombre
- mettre une condition : Si une lettre afficher la lettre et sinon ne rien afficher

H2a3m12z13a4i O45t67a78l8a -> Hamzai Otala
H12a12m12z12a12i m12o12c12hakhar -> Hamzai mochakhar
*/

let number = "0123456789";
let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let line = "H2a3m12z13a4i"; //readline();
for (var i = 0; i < line.length; i++) {
  //console.log(line.includes("ABCDEFGHIJKLMNOPQRSTUVWXYZ")) /*La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.*/
  // parcourir les charactere et verifier s'ils sont dans le tableau lettre


  // parcourir le tableau des lettres 
  //n on s'arrete si line[i] == valeur du tableau courant
  for (var j = 0; j <letter.length; j++) {
    if (letter[j] === line[i]){
      console.log(line[i])
    }
  }
}

// ------------ Opti 1 -------------- break

let number = "0123456789";
let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let line = "H2a3m12z13a4i"; //readline();
for (var i = 0; i < line.length; i++) {
  for (var j = 0; j <letter.length; j++) {
    if (letter[j] === line[i]){
      console.log(line[i])
      break
    }
  }
}

// ------------ Opti 2 -------------- number check

let number = "0123456789";
let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let line = "H2a3m12z13a4i"; //readline();
for (var i = 0; i < line.length; i++) { // parcours line
  let rappel = 0;

  for (var j = 0; j <number.length; j++) {
   if (line[i] === number[j]){
      rappel = 1
      break
    }
  }
  // si rappel = 1 alors C=N donc C est un nombre
  // si rappel = 0 alors C est une lettre
  if (rappel == 0){
    console.log(line[i])
  }
}


// ------------ Opti 3 -------------- boolean instead of 1

let number = "0123456789";
let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let line = "H2a3m12z13a4i"; //readline();
for (var i = 0; i < line.length; i++) { // parcours line
  let rappel = false;

  for (var j = 0; j <number.length; j++) {
   if (line[i] === number[j]){
      rappel = true
      break
    }
  }
  if (rappel == false){
    console.log(line[i])
  }
}


// ------------ Opti 4 -------------- create a function (isNumber()) , must return a boolean

let number = "0123456789";
let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function challenge(line){ 

  for (var i = 0; i < line.length; i++) { // parcours line
    let rappel = false;

    for (var j = 0; j <number.length; j++) {
      if (line[i] === number[j]){
        rappel = true
        break
      }
    }

    if (rappel == false){
      console.log(line[i])
    }
  } 
}

var line = "H2a3m12z13a4i"; //readline();
challenge(line)




// ------------ Opti 5 --------------  use include