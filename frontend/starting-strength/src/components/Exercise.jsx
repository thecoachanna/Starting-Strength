import React from "react";

const Exercise = ({ exercises }) => {
  console.log(exercises)

  return (
    <div>
      <h4>{exercises[0].name}</h4>
      <h1>Hello</h1>
      <p>{exercises[0].cues}</p>
      <video width="320" height="240" controls>
        <source src={exercises[0].video} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Exercise;
// map through each exercise