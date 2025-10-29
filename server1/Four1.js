// import express from 'express'
// const app = express()
// app.use(express.json())

// let users = [{
//     name : "bat",
//     age : 45
// },
//  {
//     name : "price",
//     age : 45

//  },
//  {
//     name: "goat",
//     age : 45

//  },
//  {
//     name : "blade",
//     age : 45

//  }

// ]

// app.get('/user' , (req, resp) => {
//     resp.json({
//         message : "data here in json :)",
//         data : users
//     })
// })


// app.post('/puser' , (req, resp) => {
//     const usr = req.body;
//     // users.push(usr);
//     // resp.json({message : "data in json", 
//     //     data : users
//     // })
//         users.push(usr);
//     resp.status(201).json({ // 201 Created is a good status for POST
//         message : "data in json", 
//         data : users
//     })
// })

// app.listen(4800 , () => 
// console.log("running on port 4800"));

import express from 'express'
const app = express()
app.use(express.json()) // This is crucial!

let users = [{
    name : "bat",
    age : 45
},
 {
    name : "price",
    age : 45

 },
 {
    name: "goat",
    age : 45

 },
 {
    name : "blade",
    age : 45

 }

]

// --- MODIFIED GET ROUTE ---
// You asked to be able to "add data" using this route.
// The code below adds a user if you provide 'name' and 'age' in the URL
// e.g., http://localhost:4800/user?name=QueryName&age=50
//
// ** IMPORTANT **
// This is BAD PRACTICE. GET requests should only retrieve data, not change it.
// The correct way to add data is using your POST route ('/puser').
// This is just to show you how it *could* be done.
app.get('/user' , (req, resp) => {
    
    // Check for query parameters in the URL
    const { name, age } = req.query;

    if (name && age) {
        // If name and age are provided, add a new user
        const newUser = { 
            name: name, 
            age: parseInt(age) // query params are strings, so convert age
        };
        users.push(newUser);
        
        // Send a response showing the user was added
        return resp.status(201).json({
            message: "User added via GET (bad practice!)",
            data: users
        });
    }

    // If no query params, just do the original action (get all users)
    resp.json({
        message : "data here in json :)",
        data : users
    })
})
// --- END OF MODIFIED GET ROUTE ---


app.post('/puser' , (req, resp) => {
    const usr = req.body; // Correctly gets data from req.body
    
    // Add a check to prevent pushing empty data
    if (!usr || !usr.name || !usr.age) {
        return resp.status(400).json({ message: "Invalid user data" });
    }

    users.push(usr);
    resp.status(201).json({ // 201 Created is a good status for POST
        message : "data in json", 
        data : users
    })
})

app.listen(4800 , () => 
console.log("running on port 4800"));

