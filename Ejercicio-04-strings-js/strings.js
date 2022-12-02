let first_name = 'Humberto';
let last_name = 'Serrano';
let student = first_name.concat(' ',last_name)
console.log(student)

let studentMayusc = student.toUpperCase();
console.log(studentMayusc)

let studentMinusc = student.toLowerCase();
console.log(studentMinusc);

let numbersLetters = student.length;
console.log(numbersLetters)

let first_nameInitial = first_name[0]
console.log(first_nameInitial)

let last_nameInitial = last_name[0]
console.log(last_nameInitial)

let studentNoSpaces = student.replace(' ', '')
console.log(studentNoSpaces)

let first_nameIsIn = first_name.startsWith('Humberto')
console.log(first_nameIsIn)

let first_nameIsInOpcional = first_name.startsWith(first_name)
console.log(first_nameIsInOpcional)