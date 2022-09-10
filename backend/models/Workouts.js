const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    workoutNumber: Number,
    
    exercises: [{
        exercise: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercise'
        
    },
        sets: Number,
        reps: String,
    }]
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout

// clear database and workouts
// need to populate exercise ID inside model []
// exercise.findById