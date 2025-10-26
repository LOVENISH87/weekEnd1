import express from 'express'
import { AuthStaff } from './Three1.js'

const app = express();
app.use(express.json())

app.get('/', (req, resp) => {
    resp.send("server started !!")
})


app.post("/names/chars", AuthStaff (["teacher" , "names"]), (req, resp) => {
    resp.json({

        // "a": "batman",
        // "b": "ghost",
        // "c": "James",
        "d": 5,
        play: 4,
        man : 5,
        bat : 55
    })
})




app.listen(4800, () => {
    console.log("this is running at port number: 4800");
})