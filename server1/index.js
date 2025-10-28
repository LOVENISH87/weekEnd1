// import express from 'express';
// import Sch from './Sch.js'
// import Valid from './ValidMdl.js'
// const app = express()

// app.use(express.json())

// app.get('/g', Valid(Sch), (req, resp)=> {
//     resp.send("this is get route")
// }).listen(4800)

import express from 'express';
import Sch from './Sch.js';
import Valid from './ValidMdl.js';

const app = express();
app.use(express.json()); // ✅ needed for req.body

app.get('/g', Valid(Sch), (req, res) => {
  res.send("this is get route");
});

app.listen(4800, () => console.log("Server running on port 4800"));
