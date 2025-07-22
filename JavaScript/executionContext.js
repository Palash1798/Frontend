

console.log(x,y);

var x = 100;
var y = 200;

console.log(sum(x,y));

function sum(a, b){
    total = a+b;
    return a+b;
}

console.log(total)



// --------After hoisting -------------

var x;
var y;

function sum(a, b) {
    total = a + b;
    return a + b;
}

console.log(x, y);  // A:undefined, undefined
x = 100; y = 200;

sum(x, y); // B: 300

console.log(total); // C: 300