import express from 'express'

const app = express();
app.use(express.json()) //convert every thing to json!!


const users = [

    {
        id : 1,
        name: "bat"
    },
    {
        id : 2,
        name: "cat"
    },
    {
        id : 3,
        name: "mat"
    },
    {
        id : 4,
        name: "rat"
    }
]


//just see the data here nothing else!!!

app.get('/' , (req, resp) => {
    return resp.json({
        message : "here is the data in object",
        data : users
    })
})






app.post('/add', (req, resp) => {
    // resp.send('this is post route to add data')
    const adding = req.body;

    if(!adding || !adding.name || !adding.id){
        return resp.status(401).json({
            message : "nothing added man"
        })
    }

    users.push(adding);

    resp.status(201).json({
        message : "data added"
    ,
        data : users
    })
})

app.put('/up' , (req, resp) => {
    // grab the new name 
    // loop through the list and update the name.
    // return the new list

    const NewName = req.body.NewName;

    for(let i =0; i<users.length; i++){
        users[i].name = NewName;
    }

    resp.json(users)
})


 app.delete('/del/:id',(req, resp)=>{
    // get id => delete that id => return list
    const ID = parseInt(req.params.id)

    for(let i = 0; i<users.length; i++){
        if(users[i].id == ID){
            users.splice(i, 1);
        }
    }

    resp.status(501).json(users)
 } )



app.listen(4800, () => {
    console.log("runnig on port 4800")
})


// works because i used return when user doesn't provide name!!!!!

// this is the best working file!!


// gem.js is the og!!!