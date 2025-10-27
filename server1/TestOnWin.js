// import express, { response } from 'express'
// import mysql from 'mysql'

// const app = express()
// app.use(express.json())


// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'batman',
//   database: 'windb'
// })



// app.get('/getReq', (req, res) => {
// //   res.send('Hello, World!')
// db.query('SELECT * FROM windata', (err, results) => {

//    if(err) {
//     res.status(404).json(err)
//    }else{
//      res.status(200).json(results)
//    }
// })
// })

// app.post('/', (req, res) => {
//   res.send('Hello, World!')
// })
// app.put('/', (req, res) => {
//   res.send('Hello, World!')
// })
// app.delete('/', (req, res) => {
//   res.send('Hello, World!')
// })


// // const PORT = process.env.PORT || 4800
// const PORT = 4800
// app.listen(PORT, () => {console.log("running on port 4800")})



import express, { response } from 'express'
import mysql from 'mysql'

const app = express()
app.use(express.json())

// ✅ Create MySQL connection
// const db = mysql.createConnection({
//   host: '172.21.163.132',
//   user: 'root',
//   password: 'batman',
//   database: 'windb'
// })
const db = mysql.createPool({
  connectionLimit: 10,
  host: '172.21.163.132',
  user: 'root',
  password: 'batman',
  database: 'windb'
})


// // ✅ Test the database connection
// db.connect(err => {
//   if (err) {
//     console.error('❌ Database connection failed:', err)
//   } else {
//     console.log('✅ Connected to MySQL database')
//   }
// })

// ✅ GET request
app.get('/getReq', (req, res) => {
  db.query('SELECT * FROM windata', (err, results) => {
    if (err) {
      console.error('Error while querying DB:', err)
      res.status(500).json({ error: err.message })
    } else {
      res.status(200).json(results)
    }
  })
})

// Sample routes
app.post('/add', (req, res) => {

  // const name = req.body.name
  // const age = req.body.age
  const {name, age} = req.body;
   db.query('INSERT INTO windata (name, age) VALUES (? , ? ) ' , [name  , age], (err, results) => {
    if (err) {
      console.error('Error while querying DB:', err)
      res.status(500).json({ error: err.message })
    } else {
      res.status(200).json(results)
    }
  })

})
app.put('/', (req, res) => res.send('Hello, World!'))
app.delete('/', (req, res) => res.send('Hello, World!'))

const PORT = 4800
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
