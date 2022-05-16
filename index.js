const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3001

app.use(morgan('combined'))
app.get('/', (req, res) => {
  var a = 1;
var b = 2;
var c = a + b;
  res.send('Hello World!')
})

// 127.0.0.1 - localhost:3001

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})