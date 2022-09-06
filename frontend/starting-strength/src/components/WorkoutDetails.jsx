import React from 'react'

const WorkoutDetails = ({ workout }) => {
  return (
      <div className='workout-details'>
        <h4>{workout.exercise}</h4>
      <p>
        <strong>Sets: </strong>
        {workout.sets}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        <strong>Weight: </strong>
        {workout.weight} lbs
      </p>
      <p><strong>Cues:</strong> {workout.cues}</p>
      {/* <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>  */}
    </div>
  )
}

export default WorkoutDetails