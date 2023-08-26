// Exercise 1.5 Finalize of this Courseinfo.
// single javascript object is set to the variable. Refactoring of the code so that it works.
import React from "react";

const Header = ({header}) => <h2>{header}</h2>

const CourseContent = ({course}) => {
  
  console.log(course)
  return (
  <div>
      {course.map((part) => (
        <Coursepart key={part.id} name={part.name} exercises={part.exercises} />
      ))}
  </div>
)}


const Coursepart = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Total = ({number}) => {
  const total = number.reduce((totalExercises, part) => totalExercises + part.exercises, 0)
  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  )

}

const Course = ({course}) => (
  <div>
    <Header key={course.id} header={course.name} />
    <CourseContent course={course.parts} />
    <Total number={course.parts} />
  </div>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}




export default App;
