require('dotenv').config();
require('./db/connection')

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workoutRoutes')

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Attaching all routes to app
app.use('/workouts', workoutRoutes)
// app.use('/user', userRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests once connected to DB
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB + listening on PORT: ${process.env.PORT}`)
        })
    })
    .catch ((error) => {
        console.log(error)
    })