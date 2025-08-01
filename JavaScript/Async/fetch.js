const data = {
    "todos": [
        {
            "id": 1,
            "todo": "Do something nice for someone I care about",
            "completed": true,
            "userId": 26
        },
        {
            "id": 2,
            "todo": "Memorize the fifty states and their capitals",
            "completed": false,
            "userId": 48
        },
        {
            "id": 3,
            "todo": "Watch a classic movie",
            "completed": false,
            "userId": 4
        },
        {
            "id": 4,
            "todo": "Contribute code or a monetary donation to an open-source software project",
            "completed": false,
            "userId": 48
        },
        {
            "id": 5,
            "todo": "Solve a Rubik's cube",
            "completed": false,
            "userId": 31
        },
        {
            "id": 6,
            "todo": "Bake pastries for me and neighbor",
            "completed": false,
            "userId": 39
        },
        {
            "id": 7,
            "todo": "Go see a Broadway production",
            "completed": false,
            "userId": 32
        },
        {
            "id": 8,
            "todo": "Write a thank you letter to an influential person in my life",
            "completed": true,
            "userId": 13
        },
        {
            "id": 9,
            "todo": "Invite some friends over for a game night",
            "completed": false,
            "userId": 47
        },
        {
            "id": 10,
            "todo": "Have a football scrimmage with some friends",
            "completed": false,
            "userId": 19
        },
        {
            "id": 11,
            "todo": "Text a friend I haven't talked to in a long time",
            "completed": false,
            "userId": 39
        },
        {
            "id": 12,
            "todo": "Organize pantry",
            "completed": true,
            "userId": 39
        },
        {
            "id": 13,
            "todo": "Buy a new house decoration",
            "completed": false,
            "userId": 16
        },
        {
            "id": 14,
            "todo": "Plan a vacation I've always wanted to take",
            "completed": false,
            "userId": 28
        },
        {
            "id": 15,
            "todo": "Clean out car",
            "completed": false,
            "userId": 33
        },
        {
            "id": 16,
            "todo": "Draw and color a Mandala",
            "completed": true,
            "userId": 24
        },
        {
            "id": 17,
            "todo": "Create a cookbook with favorite recipes",
            "completed": false,
            "userId": 1
        },
        {
            "id": 18,
            "todo": "Bake a pie with some friends",
            "completed": false,
            "userId": 1
        },
        {
            "id": 19,
            "todo": "Create a compost pile",
            "completed": true,
            "userId": 5
        },
        {
            "id": 20,
            "todo": "Take a hike at a local park",
            "completed": true,
            "userId": 43
        },
        {
            "id": 21,
            "todo": "Take a class at local community center that interests you",
            "completed": false,
            "userId": 22
        },
        {
            "id": 22,
            "todo": "Research a topic interested in",
            "completed": false,
            "userId": 4
        },
        {
            "id": 23,
            "todo": "Plan a trip to another country",
            "completed": true,
            "userId": 37
        },
        {
            "id": 24,
            "todo": "Improve touch typing",
            "completed": false,
            "userId": 45
        },
        {
            "id": 25,
            "todo": "Learn Express.js",
            "completed": false,
            "userId": 49
        },
        {
            "id": 26,
            "todo": "Learn calligraphy",
            "completed": false,
            "userId": 50
        },
        {
            "id": 27,
            "todo": "Have a photo session with some friends",
            "completed": false,
            "userId": 14
        },
        {
            "id": 28,
            "todo": "Go to the gym",
            "completed": false,
            "userId": 15
        },
        {
            "id": 29,
            "todo": "Make own LEGO creation",
            "completed": false,
            "userId": 30
        },
        {
            "id": 30,
            "todo": "Take cat on a walk",
            "completed": false,
            "userId": 15
        }
    ],
    "total": 150,
    "skip": 0,
    "limit": 30
};


// example :- 1
const fetAllToDo = function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(data);
        }, 1000);
    }); 
}

// fetAllToDo()
//     .then(function(data){
//         console.log(data);
//     })

  

// example:- 2
const fetchTodoById = function(id) {
    // Write a promise to return a todo object 
    // after 5 sec delay 
    // with a given todo Id.
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const result = data.todos.find(function(todo){
                return todo.id ===id;
            })
            if(result){
                resolve(result);
            } else{
                reject(`Unable to find to do with id = ${id}`)
            }
        }, 5000);
    });
}

fetchTodoById(4)
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log("Error", err);
    })