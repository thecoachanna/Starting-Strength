require('dotenv').config();
require('./db/connection')

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const { MessagingResponse } = require('twilio').twiml;

// Twilio text messaging
app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
  
    twiml.message('The Robots are coming! Head for the hills!');
  
    res.type('text/xml').send(twiml.toString());
});
  



// Socket.io
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");

// const io = new Server(server, {
//     cors: {
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST'],
//     }
// });

// io.on('connection', (socket) => {
//     console.log(`User connected: ${socket.id}`);

//     socket.on('send_message', (data) => {
//         socket.broadcast.emit('receive_message', data)
//     })
// })

const workoutRoutes = require('./routes/workoutRoutes')


// Middleware
app.use(cors())
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