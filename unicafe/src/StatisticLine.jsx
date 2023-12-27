import React from "react";

const StatisticLine = ({ option, value }) => {
  return (
    <div>
      <p>
        {option} {value}
      </p>
    </div>
  );
};

export default StatisticLine;
