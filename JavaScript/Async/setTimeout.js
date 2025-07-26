console.log("A");

setTimeout(function(){
    console.log("B");
}, 3000);

setTimeout(function(){
    console.log("c");
})

Promise
    .resolve()
    .then(() => console.log('D'));

console.log('E');