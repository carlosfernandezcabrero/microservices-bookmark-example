const router            = require('express').Router()
const connection        = require('../loaders/mysql')
const { handlerError }  = require('../shared/handlers/mysqlErrors')

router.post('/', (req, res) => {
  const sql = `INSERT INTO BOOKMARKS (NAME, URL, FOLDER) VALUES ('${req.body.name}','${req.body.url}','${req.body.folder}')`
  connection.query(sql, (err) => {
    if (err) {
      const error = handlerError(err)
      res.status(error.httpCode || 500)
      res.json({ ERROR: error })
    } else {
      res.json('Bookmark inserted')
    }
  })
})

module.exports = router
