import { useState } from "react";
import Button from "./Button";
import StatisticLine from "./StatisticLine";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const [score, setScore] = useState(0);

  const handleClick = (setOption) => {
    if (setOption === setGood) {
      setScore((prevScore) => prevScore + 1);
    } else if (setOption === setBad) {
      setScore((prevScore) => prevScore - 1);
    }

    setOption((prevOption) => prevOption + 1);
  };
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button
        text="good"
        onClick={() => {
          handleClick(setGood);
        }}
      />
      <Button
        text="neutral"
        onClick={() => {
          handleClick(setNeutral);
        }}
      />
      <Button
        text="bad"
        onClick={() => {
          handleClick(setBad);
        }}
      />
      {all ? (
        <>
          <h2>Statistics</h2>
          <table>
            <tbody>
              <StatisticLine option="good" value={good} />
              <StatisticLine option="neutral" value={neutral} />
              <StatisticLine option="bad" value={bad} />
              <StatisticLine option="all" value={all} />
              <StatisticLine option="average" value={score / all} />
              <StatisticLine
                option="positive"
                value={`${(good / all) * 100}%`}
              />
            </tbody>
          </table>
        </>
      ) : (
        <h2>No statistics to display</h2>
      )}
    </div>
  );
};

export default App;
