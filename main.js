const express = require('express')
const app = express()
const mongoose = require('mongoose');  
       
const PORT = process.env.PORT
const contactRouter = require('./Routers/contactRouters')
const indexRouter = require('./Routers/indexRouters')


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('view engine','ejs')
// Static Folder
app.use(express.static(__dirname+'/public'))
//Router
app.use('/contact',contactRouter)
app.use('/',indexRouter)
mongoose.connect('mongodb+srv://khoaiz:data2021@cluster0.btu9q.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    app.listen(PORT,()=>{
        console.log('Database Connect');
        console.log(`server running on ${PORT}`)
    })
}).catch((e)=>console.log(e))

