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

// myFetch(3000, 2)
//     .then((data) => console.log(data))
//     .catch(err => console.log(err));


// With ES6

async function fetchListdata(){
    try{
        const data = await myFetch(3000, 1);
        console.log(data);
    } catch(err){
        console.log(err);
    }
}

fetchListdata();


// Scenario 1 : Fetch below data in  sequence

// myFetch(3000, 3)
// myFetch(1000, 1)
// myFetch(2000, 2)

//A. Chaining

myFetch(6000, 3)
    .then(function(data){
        console.log(data);
        return myFetch(4000, 1);
    })
    .then(function(data){
        console.log(log);
        return myFetch(5000, 2);
    })
    .then(function(data){
        console.log('DONE!!!')
    })
    .catch((e)=> {
        console.log(e);
    })
    .finally(function(){
        console.log("Finally block executed");
    });



// B. async/await 

// async function getData() {
//     try {
//         const data1 = await myFetch(6000, 3);
//         console.log(data1);
    
//         const data2 = await myFetch(4000, 1)
//         console.log(data2);
    
//         const data3 = await myFetch(5000, 2)
//         console.log(data3);
//     } catch(e) {
//         console.log(e);
//     }
// }

// getData();