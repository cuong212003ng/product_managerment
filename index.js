const express = require('express')

//khai bao dotenv
require('dotenv').config()

//khaibao route
const route = require('./routes/client/index.route')

const app = express()
const port = process.env.PORT

//khai bao pug
app.set('views', './views')
app.set('view engine', 'pug')

//khai bao static
app.use(express.static(__dirname + '/public'))

//Routes
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
