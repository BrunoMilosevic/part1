import React from "react";

const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>Number of exercises: {props.parts}</p>
    </div>
  );
};

export default Total;
