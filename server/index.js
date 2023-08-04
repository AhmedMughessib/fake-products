const express = require('express')
const getData = require('../connection/getData')
const getCategories = require('../connection/getCategories.js')
const app = express();
const router = express.Router();
const cors = require('cors');
const getProductsNumber = require('../connection/getProductsNumber');

app.use(cors())

router.get('/products', (req, res) => {
  const {pageNumber}= req.query;
getData(pageNumber).then(data => res.json(data.rows))
})

router.get('/categories', (req, res) => {
getCategories().then(data => res.json(data.rows ));
})

router.get('/test', (req, res) => {
  console.log('got req');
  res.json({"req": "success"})
})

router.get('/productsnumbur', (req, res) => {
  getProductsNumber().then(data => res.json(data.rows))
})

app.use(router);

app.listen(5000, () => {
  console.log('app is listening on port 5000');
})