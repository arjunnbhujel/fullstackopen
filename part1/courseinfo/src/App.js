// Exercise 1.5 Finalize of this Courseinfo.
// single javascript object is set to the variable. Refactoring of the code so that it works.


const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Part = (props) => {
  return (
   <>
      <h2>{props.part.name}</h2>
      <p>There are {props.part.exercises} Exercises</p>
   </>
  )
}

const Content = (props) => {
    return (
      <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
      </div>
    )
}

const Total = (props) => {
  // array reduce () is used here
  // const total = props.parts.reduce((sum, index) => sum + index.exercises, 0);

  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  return (
    <p>There are total of {total} No of exercises.</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return(
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}




export default App;
