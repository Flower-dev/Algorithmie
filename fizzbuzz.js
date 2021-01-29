/*
Consigne : Affiche les nombres de 1 à 100. 
Si le chiffre est divisible par 3, remplace le chiffre par le mot « fizz ». 
Si le chiffre est divisible par 5, affiche le mot « buzz ». 
Si le chiffre est divisible par 3 et 5, affiche le mot « fizzbuzz ». 
Sinon fait simplement apparaitre le chiffre.
*/

for (let i = 1; i =< 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
    } 
    
    else if (i % 3 == 0) {
       console.log("fizz"); 
    }

    else if (i % 5 == 0) {
        console.log("buzz"); 
     }

    else {
        console.log(i);
    }
}
