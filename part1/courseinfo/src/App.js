// Exercise 1.1: course information, step1 contains defination of new component
// i.e. Header, Content and Total


// Exercise 1.3: Printing props to the Console.
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}


// Exercise 1.2: course information, step2 is just the refactoration.
// Created another component i.e. Part.
// Part is called in Content Component which further accepts array of parts in App Component

const Content = ( props ) => {
  console.log( props.parts[0].name )
    return (
      <div>
        <>
          <h2>{props.parts[0].name}</h2>
          <p>The Number of Exercises are = {props.parts[0].exercises}</p>
        </>

        <>
          <h2>{props.parts[1].name}</h2>
          <p>The Number of Exercises are = {props.parts[1].exercises}</p>
        </>

        <>
          <h2>{props.parts[2].name}</h2>
          <p>The Number of Exercises are = {props.parts[2].exercises}</p>
        </>

      </div>
    )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>There are total of {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} No of exercises.</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  // 1.4 : refactoring the code with the help of below variable
  // There is no use of any array loop as instructed in the course

  const parts = [
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

  return(
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}




export default App;
