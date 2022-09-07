const router = require('express').Router()
const workoutController = require('../controllers/workoutController')


// GET all exercises
router.get('/', workoutController.index)

// GET a single workout
router.get('/:id', workoutController.getOneExercise)

module.exports = router;