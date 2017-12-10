// 1 Ex
let a = 17;
let b = 10;
let c = a - b;
let d = 7;
let result = c + d;
alert('result = ' + result);

// 2 Ex
let str = 'abcde';
alert(str[0] + ' ' + str[2] + ' ' + str[4]);

// 3 Ex
let hour = 3600;
let day = (hour * 24);
let month = (day * 30);

function setToSeconds(inputValue) {
    if (inputValue == hour) {
        alert('There are ' + hour + ' seconds in an hour');
    } else if (inputValue == day) {
        alert('There are ' + day + ' seconds in a day');
    } else if (inputValue == month ) {
        alert('Finally, there are ' + month + ' seconds in a month');
    } else {
        alert('Invalid input value');
    }
}

setToSeconds(hour);
setToSeconds(day);
setToSeconds(month);