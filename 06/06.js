
function someFunc(a) {
    if (a >= 0)
        alert('Right!');
    else
        alert('Wrong!');
}

someFunc(1);
someFunc(0);
someFunc(-3);

function anotherFunc(a) {
    if (a === 0 || a === 2)
        a += 7;
    else
        a /= 10;
    alert(a);
}

anotherFunc(5);
anotherFunc(0);
anotherFunc(-3);
anotherFunc(2);


function checkingNumb() {
    let stringRow = prompt('Enter a number only', '12345');
    if (stringRow[0] == 1 || stringRow[0] == 2 || stringRow[0] == 3)
        alert('yes');
    else
        alert('no');
}

checkingNumb();