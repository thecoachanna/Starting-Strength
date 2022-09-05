const Workout = require('../models/workoutModel')
const mongoose = require('mongoose');


// GET all exercises

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    
    res.status(200).json(workouts)
}


// GET a single exercise

const getOneWorkout = async (req, res) => { 
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such workout' })
    }
    
    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(400).json({error: 'No such workout'})
    }

    res.stauts(200).json(workout)
}




// const updateWorkout = async (req, res) => {
//     const { id } = req.params

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ error: 'no such workout' })
//     }

//     const workout = await Workout.findOneAndUpdate({ _id: id }, {
//         ...req.body
//     })

//     if (!workout) {
//         return res.status(400).json({error: 'No such workout'})
//     }

//     res.status(200).json(workout)
// }



module.exports = {
    
    getWorkouts,
    getOneWorkout,
    
}