// 1 with for loop
for (let i = 1; i < 51; i++)
console.log(i);
// 2 with for
for (let i = 1; i < 21; i++) {
    if (i % 2 == 0)
        console.log(i);
}
// 3 with for
circle:
    for (let i = 2; i < 31; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue circle;
        }
        console.log(i);
    }
// 1 with while
let numb = 1;
while (numb < 51){
    console.log(numb);
    numb++;
}
// 2 with while
let evenNumbers = 1;
while (evenNumbers < 21){
    if (evenNumbers % 2 == 0)
    console.log(evenNumbers);
    evenNumbers++;
}


