const express       = require('express')
const cors          = require('cors')
const helmet        = require('helmet')
const morgan        = require('morgan')
const compression   = require('compression')
const dotenv        = require('dotenv')
const bodyParser    = require('body-parser')

const app = express()
dotenv.config()

// Middleware
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(morgan('dev'))

// Routes
app.use(require('./routes/index.route'))
app.use('/bookmarks', require('./routes/bookmark.route'))

app.listen(process.env.PORT, () => {
  console.info(`Server started on port ${process.env.PORT}`)
})
