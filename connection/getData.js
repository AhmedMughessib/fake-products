const pool = require('./dbConnection');

const getData = (pageNumber) => {
  const firstElemnt = ((pageNumber-1)* 12)
  return pool.query('SELECT * FROM products LIMIT 12 OFFSET $1', [firstElemnt]);
}

module.exports = getData;