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