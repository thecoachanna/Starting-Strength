const Exercise = require('../models/Exercise')
const mongoose = require('mongoose');


// GET all exercises

const index = (req, res) => {
    Exercise.find({}, (err, exercise)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(exercise)

    })
}

// GET a single exercise
const getOneExercise = (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) =>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(exercise)
    })
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
    
    index,
    getOneExercise,
    
}