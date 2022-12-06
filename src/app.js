//Config app
const express = require('express')
const morgan = require('morgan')
require('dotenv').config

const app = express()


//import routes 


//route middlewares

app.use(morgan('dev'))


app.get('/',(req,res) =>{
  res.json({
    estado: true,
    mensaje:"funciona"
  })
})

module.exports = app