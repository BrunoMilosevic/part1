import React from "react";

const StatisticLine = ({ option, value }) => {
  return (
    <tr>
      <td>{option}</td>
      <td>{value}</td>
    </tr>
  );
};

export default StatisticLine;
