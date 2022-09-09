import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const NewWorkout = ({ addWorkout }) => {
    const initialState = {
        name: '',
        sets: '',
        reps: '',        
        uniqueIdentifier: '',
        
    }

    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post('http://localhost:4000/workouts', formData )
        .then(res =>  {
            setFormData(initialState)
            addWorkout(res.data)
            navigate('/', { replace: true })
        })

    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <h1> Create New Workout</h1>
              <div>
                  {/* needs to be dropdown */}
                <label htmlFor='name'>Name</label>
                <input id='name' name='name' type='text' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='type'>Sets</label>
                <input id='type' name='type' type='text' onChange={handleChange} value='Sets' />
              </div>
              <div>
                <label htmlFor='type'>Reps</label>
                <input id='type' name='type' type='text' onChange={handleChange} value='Reps' />
            </div>           
                <input type='submit' value='Create Workout' />
          </form>
    </div>
  )
}

export default NewWorkout