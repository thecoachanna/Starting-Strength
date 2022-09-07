require('dotenv').config();
require('./db/connection')

const express = require('express')
const app = express()
const PORT = 4000
const cors = require('cors')
const { MessagingResponse } = require('twilio').twiml;

const workoutRoutes = require('./routes/workoutRoutes')

// Twilio text messaging
app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
  
    twiml.message('The Robots are coming! Head for the hills!');
  
    res.type('text/xml').send(twiml.toString());
});


// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Attaching all routes to app
app.use('/workouts', workoutRoutes)
// app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.json('Welcome to Starting Stength!')
})

app.listen(PORT, ()=> {
    console.log(`Listening on PORT: ${PORT}`)
})