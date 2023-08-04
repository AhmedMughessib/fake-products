const pool = require('./dbConnection');

const getCategories = () => {
  return pool.query('SELECT DISTINCT category FROM products');
}

module.exports = getCategories;