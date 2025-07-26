// creating our promise based on result 

const boardPromise = new Promise(function(resolve, reject){
    const passingScore = 95;
    const studentScore = 98;

    setTimeout(function(){
        if (studentScore >= passingScore) {
            resolve('Successfully cleared the board exam');
        } else {
            reject('Failed the exam');
        }
    }, 4000);
});

// consuming above promise
console.log('START');

const p =boardPromise
    .then(function(data){
        console.log("Success: ", data);
        return data;
    })
    .then(function(data){
        console.log('Uppercase: ', data.toUpperCase());
    })
    .catch(function(err){
        console.log('Failure: ', err);
    })


    console.log(p);

    console.log("THE END");




    // Other way to write the same function in ES6

    async function getBoardData(){
        try {
            const data = await boardPromise;
            console.log("UpperCase: ", data.toUpperCase());
        } catch (e){
            console.log('Failure: ' , e);
        }
    }

    getBoardData();