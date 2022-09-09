import React from 'react'
import Exercise from '../components/Exercise'

const Home = ({ exercises }) => {
  console.log(exercises)
    return (
      <div>
        <select id="workouts">
          <option value="workout1">Workout 1</option>
          <option value="workout1">Workout 2</option>
        
        
        </select>
          <Exercise exercises={exercises} />
      </div>
    )
  }

export default Home