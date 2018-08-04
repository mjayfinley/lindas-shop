const express = require('express');
const app = express();
const pg = require('pg')
const bodyParser = require('body-parser')

let models = require('./models')

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.use(function(req,res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/', (req,res) => {
  res.send('hello server')
})

app.get('/products', (req,res) => {
  models.Product.findAll()
  .then(products => products = res.status(200).json(products))
})

app.post('/add-product', (req,res) => {
  let product = req.body;
  models.Product.create(product)
  .then(() => res.send({message : "success"}))
})

app.get('/cart', (req,res) =>{
  models.Cart.findAll().then(products => products = res.status(200).json(products))
})

app.post('/add-product-to-cart',(req,res) => {
  let product = {
    product_name : req.body.product_name,
    price : req.body.price,
    quantity : req.body.quantity
  }

  models.Cart.create(product)
  .catch(function(err) {
    console.log(err, product)
  })
})

app.delete('/delete-product-from-cart/:cartId',(req,res) => {
  let cartId = req.params.cartId
  models.Cart.destroy({
    where: {
      id : cartId
    }
  }).then((results) => models.Cart.findAll())
  .then(products => products = res.status(200).json(products))
})

app.delete('/product/:productId', (req,res) => {
  let productId = req.params.productId
  models.Product.destroy({
    where: {
      id : productId
    }
  }).then(() => res.send({message : "success"}))
})

const port = process.env.PORT || 3001
app.listen(port ,function(){
  console.log("node server has started")
})
