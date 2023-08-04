const pool = require('./dbConnection');

const getProductsNumber = () => {
  return pool.query('SELECT COUNT(*) as row_count FROM products');
}

module.exports = getProductsNumber;