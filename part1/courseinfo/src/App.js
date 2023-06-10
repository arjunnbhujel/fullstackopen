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
    return (
      <div>
        <>
          <h2>{props.part1.name}</h2>
          <p>The Number of Exercises are = {props.part1.exercises}</p>
        </>

        <>
          <h2>{props.part2.name}</h2>
          <p>The Number of Exercises are = {props.part2.exercises}</p>
        </>

        <>
          <h2>{props.part3.name}</h2>
          <p>The Number of Exercises are = {props.part3.exercises}</p>
        </>

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

  // 1.4 : refactoring the code with the help of below variable

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return(
    <div>
      <Header course={course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}




export default App;
