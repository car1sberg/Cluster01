/*1. Напишіть функцію, що повертає куб числа.

2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).



4. Перепишіть третє завдання, використавши ґфункціональний вираз

5. Реалізуйте функцію знаходження факторіала*/

function cube(myValue){
    let cubed;
    cubed = (myValue) ** 3;
    return cubed;
}

alert(cube(3));

let a = 2;
let b = 2;
let c = 4;
function operations() {
    let result = (a + b) / c;
    return result;
}

alert('(a + b) / c = ' + operations());

function daysCount() {
    let userInput = prompt('Enter a number form 1 to 7', '');

    if (userInput == '1')
        alert('It is Monday.');
    else if (userInput == '2')
        alert('It is Tuesday.');
    else if (userInput == '3')
        alert('It is Wednesday.');
    else if (userInput == '4')
        alert('It is Thursday.');
    else if (userInput == '5')
        alert('It is Friday.');
    else if (userInput == '6')
        alert('It is Saturday.');
    else if (userInput == '7')
        alert('It is Sunday.');
    else
        alert('Invalid number. Enter a number form 1 to 7');
}
daysCount();

function daysCountTwo(myNumber) {

    if (myNumber == '1')
        alert('It is Monday.');
    else if (myNumber == '2')
        alert('It is Tuesday.');
    else if (myNumber == '3')
        alert('It is Wednesday.');
    else if (myNumber == '4')
        alert('It is Thursday.');
    else if (myNumber == '5')
        alert('It is Friday.');
    else if (myNumber == '6')
        alert('It is Saturday.');
    else if (myNumber == '7')
        alert('It is Sunday.');
    else
        alert('Invalid number. Enter a number form 1 to 7');
}
daysCountTwo(3);

function factorial(n) {
    let result;
    if (n == 1)
        return n;
    else
        result = n * (factorial(n - 1));
        return result;
}

alert('!5 = ' + factorial(5));