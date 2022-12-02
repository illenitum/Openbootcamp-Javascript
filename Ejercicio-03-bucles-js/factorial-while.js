//Factorial-while

var number = 10;
var initNumber = 1;
var factorial = 1;

while (initNumber <= number){

    var factorial = initNumber * factorial;
    initNumber += 1;
}
console.log("El factorial de ", number, " es ", factorial);