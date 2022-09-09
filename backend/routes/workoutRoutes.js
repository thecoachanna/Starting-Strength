const router = require('express').Router()
const workoutController = require('../controllers/workoutController')


// GET all exercises
router.get('/', workoutController.index)

// GET a single workout
router.get('/:id', workoutController.getOneExercise)

router.post('/', workoutController.createOneExercise)

router.post('/', workoutController.createWorkout)

router.post('/', workoutController.createPhase)

module.exports = router;

// loop over exercises with selected (will need an onChange)