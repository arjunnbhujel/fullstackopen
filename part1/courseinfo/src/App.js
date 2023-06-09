// Exercise 1.1: course information, step1 contains defination of new component
// i.e. Header, Content and Total

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <div>
      <h2>{props.part}</h2>
      <p>The number of exercises are = {props.exercise}</p>
      <br />
    </div>
  )
}


// Exercise 1.2: course information, step2 is just the refactoration.
// Created another component i.e. Part.
// Part is called in Content Component which further accepts array of parts in App Component

const Content = (props) => {

    // use of array.map Prototype
    // index === parts[i] where i increment by 1 untill the end of array
    return (
      <div>
        {props.parts.map( (index) => (<Part part = {index.name} exercise = {index.exercises}/>)
        )}
      </div>
    )
}

const Total = (props) => {
  return (
    <p>There are total of {props.exercises1 + props.exercises2 + props.exercises3} No of exercises.</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    { name : 'Fundamentals of React', exercises : 10},
    { name : 'Using props to pass data', exercises : 7},
    { name : 'State of a component', exercises : 14}
  ]

  return(
    <div>
      <Header course={course} />
      <Content parts = {parts} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </div>
  )
}




export default App;
