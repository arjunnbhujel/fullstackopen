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

export default Course;