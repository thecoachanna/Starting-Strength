import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import axios from "axios";

const NewWorkout = ({ addWorkout, exercises }) => {
  const initialState = {
    workoutNumber: "",
    sets: "",
    reps: "",
    uniqueIdentifier: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const [selectedExercise, setSelectedExercise] = useState([]);

  const handleChange = (e, num) => {
    console.dir(e.target);

    let data = selectedExercise.map((exercise, index) => {
      if (num === index) {
          console.log(num, num === index);
          
        exercise[e.target.name] = e.target.value;
      }
      return exercise;
    });
    setSelectedExercise(data);
    // setFormData({ ...formData, [e.target.id] : { ...formData[e.target.id] ,[e.target.name]: e.target.value }})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:4000/workouts", {
        // ...formData,
        selectedExercise
      })
      .then((res) => {
        setFormData(res.data);
        navigate('/workouts/home', { replace: true })
      });
  };

    const handleSelectedExercise = (e, num) => {
        let data = selectedExercise.map((exercise, index) => {
            if (num === index) {
              
              return e
            }
            return exercise;
          });
    setSelectedExercise([...selectedExercise, e]);
  };

  let exerciseNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create New Workout</h1>
        <div>
          <label htmlFor="type">Workout Number</label>
          <input
            id="type"
            name="workoutNumber"
            type="text"
            onChange={handleChange}
          />
        </div>
        {exerciseNumber.map((num) => {
          return (
            <>
              <label>
                Select exercise
                <Select
                  id={`exercise${num}`}
                  defaultValue={selectedExercise}
                  onChange={handleSelectedExercise}
                  options={exercises.map((exercise) => {
                    return {
                      exercise: exercise._id,
                      label: exercise.name,
                      
                    };
                  })}
                />
              </label>
              <div>
                <label htmlFor="type">Sets</label>
                <input
                  id={`sets${num}`}
                  name="sets"
                  type="text"
                  onChange={(e) => {
                    handleChange(e, num);
                  }}
                />
              </div>
              <div>
                <label htmlFor="type">Reps</label>
                <input
                  id={`reps${num}`}
                  name="reps"
                  type="text"
                  onChange={(e) => {
                    handleChange(e, num);
                  }}
                />
              </div>
            </>
          );
        })}

        {/* <label>
          Select exercise
          <Select
            id="exercise2"
            defaultValue={selectedExercise}
            onChange={handleSelectedExercise}
            options={exercises.map((exercise) => {
              return {
                value: exercise._id,
                label: exercise.name,
                cues: exercise.cues,
                name: exercise.name,
                video: exercise.video,
              };
            })}
          />
        </label> */}
        {/* <div>
                <label htmlFor='type'>Sets</label>
                <input id='type' name='sets' type='text' onChange={handleChange} />
              </div>
              <div>
                <label htmlFor='type'>Reps</label>
                <input id='type' name='reps' type='text' onChange={handleChange} />
              </div>
             
              <label>Select exercise                  
                  <Select id='exercise3'
                      defaultValue={selectedExercise}
                      onChange={handleSelectedExercise}
                      options={exercises.map((exercise) => {
                          return {
                              value: exercise._id,
                              label: exercise.name,
                              cues: exercise.cues,
                              name: exercise.name,
                              video: exercise.video
                          }
                      })}
                  />
                </label>
            <div>
                <label htmlFor='type'>Sets</label>
                <input id='type' name='sets' type='text' onChange={handleChange} />
              </div>
              <div>
                <label htmlFor='type'>Reps</label>
                <input id='type' name='reps' type='text' onChange={handleChange} />
              </div>  

            <label>Select exercise                  
                  <Select id='exercise4'
                      defaultValue={selectedExercise}
                      onChange={handleSelectedExercise}
                      options={exercises.map((exercise) => {
                          return {
                              value: exercise._id,
                              label: exercise.name,
                              cues: exercise.cues,
                              name: exercise.name,
                              video: exercise.video
                          }
                      })}
                  />
                </label>
            <div>
                <label htmlFor='type'>Sets</label>
                <input id='type' name='sets' type='text' onChange={handleChange} />
              </div>
              <div>
                <label htmlFor='type'>Reps</label>
                <input id='type' name='reps' type='text' onChange={handleChange} />
              </div>
              
              <label>Select exercise                  
                  <Select id='exercise5'
                      defaultValue={selectedExercise}
                      onChange={handleSelectedExercise}
                      options={exercises.map((exercise) => {
                          return {
                              value: exercise._id,
                              label: exercise.name,
                              cues: exercise.cues,
                              name: exercise.name,
                              video: exercise.video
                          }
                      })}
                  />
                </label>
            <div>
                <label htmlFor='type'>Sets</label>
                <input id='type' name='sets' type='text' onChange={handleChange} />
              </div>
              <div>
                <label htmlFor='type'>Reps</label>
                <input id='type' name='reps' type='text' onChange={handleChange} />
              </div>

              <label>Select exercise                  
                  <Select id='exercise6'
                      defaultValue={selectedExercise}
                      onChange={handleSelectedExercise}
                      options={exercises.map((exercise) => {
                          return {
                              value: exercise._id,
                              label: exercise.name,
                              cues: exercise.cues,
                              name: exercise.name,
                              video: exercise.video
                          }
                      })}
                  />
                </label>
            <div>
                <label htmlFor='type'>Sets</label>
                <input id='type' name='sets' type='text' onChange={handleChange} />
              </div>
              <div>
                <label htmlFor='type'>Reps</label>
                <input id='type' name='reps' type='text' onChange={handleChange} />
              </div>

              <label>Select exercise                  
                  <Select id='exercise7'
                      defaultValue={selectedExercise}
                      onChange={handleSelectedExercise}
                      options={exercises.map((exercise) => {
                          return {
                              value: exercise._id,
                              label: exercise.name,
                              cues: exercise.cues,
                              name: exercise.name,
                              video: exercise.video
                          }
                      })}
                  />
                </label>
            <div>
                <label htmlFor='type'>Sets</label>
                <input id='type' name='sets' type='text' onChange={handleChange} />
              </div>
              <div>
                <label htmlFor='type'>Reps</label>
                <input id='type' name='reps' type='text' onChange={handleChange} />
              </div>

              <label>Select exercise                  
                  <Select id='exercise8'
                      defaultValue={selectedExercise}
                      onChange={handleSelectedExercise}
                      options={exercises.map((exercise) => {
                          return {
                              value: exercise._id,
                              label: exercise.name,
                              cues: exercise.cues,
                              name: exercise.name,
                              video: exercise.video
                          }
                      })}
                  />
                </label>
            <div>
                <label htmlFor='type'>Sets</label>
                <input id='type' name='sets' type='text' onChange={handleChange} />
              </div>
              <div>
                <label htmlFor='type'>Reps</label>
                <input id='type' name='reps' type='text' onChange={handleChange} />
              </div>

              <label>Select exercise                  
                  <Select id='exercise9'
                      defaultValue={selectedExercise}
                      onChange={handleSelectedExercise}
                      options={exercises.map((exercise) => {
                          return {
                              value: exercise._id,
                              label: exercise.name,
                              cues: exercise.cues,
                              name: exercise.name,
                              video: exercise.video
                          }
                      })}
                  />
                </label>
            <div>
                <label htmlFor='type'>Sets</label>
                <input id='type' name='sets' type='text' onChange={handleChange} />
              </div>
              <div>
                <label htmlFor='type'>Reps</label>
                <input id='type' name='reps' type='text' onChange={handleChange} />
              </div> */}
        <input type="submit" value="Create Workout" />
      </form>
    </div>
  );
};

export default NewWorkout;
