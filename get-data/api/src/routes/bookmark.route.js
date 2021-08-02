const router            = require('express').Router()
const connection        = require('../loaders/mysql')
const { handlerError }  = require('../shared/handlers/mysqlErrors')

router.get('/', (req, res) => {
  const sql = 'SELECT NAME, URL, FOLDER FROM BOOKMARKS'
  connection.query(sql, (err, rows) => {
    if (err) {
      const error = handlerError(err)
      res.status(error.httpCode || 500)
      res.json({ ERROR: error })
    } else {
      res.json(rows)
    }
  })
})

module.exports = router
