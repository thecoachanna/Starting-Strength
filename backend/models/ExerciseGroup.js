const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    id: {
        type: [''],
        
    },
    name: {
        type: String,
        
    },
    video: {
        type: String,
        
    },   
    cues: {
        type: String,
    },
    
})

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout