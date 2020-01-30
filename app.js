const express = require('express')
const app = express()
const port = 3000
const session = require('express-session')
const Router = require('./routes')

app.use(session({
    secret: 'ApA AJA',
    resave: false,
    saveUninitialized: true,
}))

app.use(express.urlencoded({extended : false}))

app.set('view engine', 'ejs')

app.use(Router)


app.listen(3000,()=>{
    console.log(port)
})