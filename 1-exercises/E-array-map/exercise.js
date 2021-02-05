// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multi(num) {
    return num * 100;
}

var numbersMulti1 = numbers.map(multi);
console.log(numbersMulti1);

var numbersMulti2 = numbers.map(function multi(num){
    return num * 100;
});
console.log(numbersMulti2);

var numbersMulti3 = numbers.map(function(num){
    return num * 100;
});
console.log(numbersMulti3)

var numbersMulti4 = numbers.map(number => {
    return number * 100
});
console.log(numbersMulti4);

var numbersMulti5 = numbers.map(number => number * 100);
console.log(numbersMulti5);