const express = require("express")
//import projectRoutes from routes folder
const projectRoutes = require('./routes/projectRoutes')
//this allows us to use .env variables
require('dotenv').config()
//import mongoose
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
//create express app 
const app = express()
const cors = require('cors')
//middleware
//allows us to send post body to server in post request
app.use(express.json())
app.use(cors())
//this allows us to do something between each request.
// in this case, we console.log() between each request
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})
//path for project routes
app.use('/api/projects', projectRoutes)

//connecting to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen on port 5000
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    }).catch((error) => {
        console.log(error)
    })


