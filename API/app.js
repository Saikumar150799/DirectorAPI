const express = require('express')
const mongoose = require('mongoose')
const URL = 'mongodb://0.0.0.0:27017/directors'

const app = express()

const PORT = process.env.PORT || 9000

mongoose.connect(URL, { useNewUrlParser: true })

const con = mongoose.connection

con.on('open', () => {
    console.log("connected")
})

app.use(express.json())

const directorRouter = require('./routers/directors')
app.use('/directors', directorRouter)


app.listen(PORT, () => {
    console.log("server started")
})