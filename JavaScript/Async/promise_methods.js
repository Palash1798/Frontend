
const list = [{
    id: 1,
    title: 'Product 1',
    description: 'Awesome product 1'
}, {
    id: 2,
    title: 'Product 2',
    description: 'Awesome product 2'
}, {
    id: 3,
    title: 'Product 3',
    description: 'Awesome product 3'
}];

// A function to take (delay, limit), 
// which return data with limit
// in case limit > 3, through error

const myFetch = function(delay, limit){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(limit > list.length){
                reject('Out of limit');
            } else {
                const data = list.slice(0, limit);
                resolve(data);
            }
        }, delay);
    })
}


// Scenario 2 : Fetch below data in parallel (terminate ASAP).

// myFetch(3000, 3)
// myFetch(1000, 1)
// myFetch(2000, 2)

Promise.all([myFetch(5000, 3), myFetch(1000, 5), myFetch(3000, 2)])
    .then(function(data){
        console.log(data); //array of result
    })
    .catch(function(e){
        console.log(e);
    });



// Scenario 3: Fetch below data in parallel (don't terminate)


// Promise.allSettled([myFetch(5000, 3),myFetch(1000, 5), myFetch(3000, 2) ])
//     .then(function(data) {
//         console.log(data); // array of results
//     });


// Scenario 3: Fetch below data in parallel (return result asap)

// Promise.race([myFetch(10000, 3),myFetch(2000, 3), myFetch(2000, 5) ])
//     .then(function(data) {
//         console.log(data); // array of results
//     })
//     .catch(function(e) {
//         console.log(e);
//     });


// Scenario 4: Fetch below data in parallel (return any success)

// Promise.any([myFetch(10000, 3),myFetch(2000, 5), myFetch(5000, 3) ])
//     .then(function(data) {
//         console.log(data); // array of results
//     })
//     .catch(function(e) {
//         console.log(e);
//     });