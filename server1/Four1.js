import express from 'express'
const app = express()

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

app.get('/user' , (req, resp) => {
    resp.json({
        message : "data here in json :)",
        data : users
    })
})


app.post('/puser' , (req, resp) => {
    const usr = users.body;
    users.push(usr);
    resp.json({message : "data in json", 
        data : users
    })
})

app.listen(4800 , () => 
console.log("running on port 4800"));