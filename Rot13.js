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

