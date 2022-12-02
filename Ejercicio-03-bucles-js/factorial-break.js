//factorial-break

var number = 10;
var factorial = 1;
var initNumber = 1;

while (true) {
    console.log(initNumber)
    factorial = initNumber * factorial;
    
    if (initNumber === number) {
        console.log(initNumber);
        break;
        
    }
    initNumber +=1
    
}
console.log("El factorial de ", number, " es ", factorial);