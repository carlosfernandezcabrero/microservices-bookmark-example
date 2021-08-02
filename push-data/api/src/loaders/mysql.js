const mysql         = require('mysql')
const MYSQL_CONFIG  = require('../shared/config/mysqlConfig')

const connection = mysql.createConnection({
  host          : MYSQL_CONFIG.host,
  user          : MYSQL_CONFIG.user,
  password      : MYSQL_CONFIG.password,
  database      : MYSQL_CONFIG.database,
  connectTimeout: MYSQL_CONFIG.connectTimeout,
})

connection.connect((err) => {
  if (err) {
    throw new Error(err)
  }
  console.info('Database connected')
})

module.exports = connection
