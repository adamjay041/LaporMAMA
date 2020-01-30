const express = require('express')
const app = express()
const port = 3000

const Router = require('./routes')

app.use(express.urlencoded({extended : false}))

app.set('view engine', 'ejs')

app.use(Router)


app.listen(3000,()=>{
    console.log(port)
})