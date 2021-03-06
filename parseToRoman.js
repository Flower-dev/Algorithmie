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