const express = require('express');

const {
    getOneWorkout,
    getWorkouts,    

} = require('../controllers/workoutController')


const router = express.Router();

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getOneWorkout)

module.exports = router;