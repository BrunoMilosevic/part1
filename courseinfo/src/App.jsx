import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = {
    name: "Half Stack application evelopment",
    parts: [
      {
        name: "Fundementals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content
        parts={course.parts[0].name}
        exercises={course.parts[0].exercises}
      />
      <Content
        parts={course.parts[1].name}
        exercises={course.parts[0].exercises}
      />
      <Content
        parts={course.parts[2].name}
        exercises={course.parts[2].exercises}
      />
      <Total
        parts={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  );
};

export default App;
