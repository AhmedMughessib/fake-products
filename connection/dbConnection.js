const {Pool} = require('pg')
const pool = new Pool({
  connectionString: 'postgres://ahmed_fake:123456@localhost:5432/fake_products',
  ssl: false,
});
 

module.exports = pool;