const express = require('express');
const app = express();



app.get('/', (req,res) => {
  res.send('hello server')
})

const port = process.env.PORT || 3001
app.listen(port ,function(){
  console.log("node server has started")
})
