// import express from 'express'
// import cors from 'cors'
// import bodyParser from 'body-parser'
// import mongoose from 'mongoose'
// // import routes from './routes/index.js'


// const app = express();

// app.use(bodyParser.json({limit : "10mb", extended : true}))
// app.use(bodyParser.urlencoded({limit : "20mb", extended : true}))
// app.use(cors())


// // const Connect_mdb =  'mongodb+srv://lovenish369_db_user:f2skLrBIgwy5IZ0q@cluster0.dhstrmr.mongodb.net/'
// const Connect_mdb = 'mongodb+srv://lovenish369_db_user:f2skLrBIgwy5IZ0q@cluster0.dhstrmr.mongodb.net/myDatabaseName?retryWrites=true&w=majority';


// const PORT = process.env.PORT  || 4800;

// mongoose.connect(Connect_mdb)
//     // , {useNewUrlParser : true , useUnifiedTopology : true})
// // now promises !!1
// .then(() => app.listen(PORT , () => {
//     console.log(`running on port -> ${PORT}`)
// }))
// .catch((error) => console.log(error.message))

// // mongoose.set('useFindAndModify', false)
// // app.get('/', (req, res) => {
// //     res.send('server is running');
// // })


// // app.listen(4800, () => {
// //     console.log('Server is running on port 4800');
// // })

// // lovenish369_db_user
// // f2skLrBIgwy5IZ0q

// // mongodb+srv://lovenish369_db_user:f2skLrBIgwy5IZ0q@cluster0.dhstrmr.mongodb.net/




import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

import Postrouter from './Routes/posts.js';

const app = express();
app.use('/posts', Postrouter)
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://lovenish369_db_user:f2skLrBIgwy5IZ0q@cluster0.dhstrmr.mongodb.net/testing?retryWrites=true&w=majority";
const client = new MongoClient(uri);

let collection;

async function startServer() {
  try {
    await client.connect();
    console.log("MongoDB connected");

    const db = client.db("testing");
    collection = db.collection("tests");

    app.listen(4800, () => console.log('Server running on port 4800'));
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
}

startServer();

app.get('/data', async (req, res) => {
  try {
    const docs = await collection.find({}).toArray();
    res.json(docs);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
