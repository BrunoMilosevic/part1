import React from "react";

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.parts} : {props.exercises}
      </p>
    </div>
  );
};

export default Content;
