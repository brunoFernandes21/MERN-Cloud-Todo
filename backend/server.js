const { response } = require("express")
const express = require("express")
//this allows us to use .env variables
require('dotenv').config()
//create express app 
const app = express()
//middleware
//allows us to send post body to server in post request
app.use(express.json())
//this allows us to do something between each request.
// in this case, we console.log() between each request
// app.use((request, response, next) => {
//     console.log(request.path, request.method)
//     next()
// })
app.get('/', (request, response) => {
    response.status(200).json({mssg: 'Get all projects'})
})
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})

