const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const nodemailer = require('nodemailer')

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(require('./routes/index'))

// Static files
app.use('/public', express.static(path.join(__dirname, 'public')))

module.exports = app
