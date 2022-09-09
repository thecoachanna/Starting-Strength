const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    name: String,
    sets: Number,
    reps: Number,
    uniqueIdentifier: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercise'
        }],
    }
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout