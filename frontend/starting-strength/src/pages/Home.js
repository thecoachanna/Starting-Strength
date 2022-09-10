import React from 'react'
import Exercise from '../components/Exercise'

const Home = ({ exercises }) => {
  
    return (
      <div>
          <Exercise exercises={exercises} />
      </div>
    )
  }

export default Home