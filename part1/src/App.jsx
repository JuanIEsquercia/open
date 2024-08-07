const Header = ({props}) => {

  return (
      <div>
          <h1>{props.course}</h1>
          <p>
              {props.parts[0].name} {props.parts[0].exercises}
          </p>
      </div>
  )
}

const Content = ({parts}) => {

  return (
      <div>
          <h1>{parts[1].name}</h1>
          <p>
              {parts[1].name} {parts[1].exercises}
          </p>
      </div>
  )
}
const Total=({parts})=>{
  const exercisesTotal = parts.reduce((total, part) => total + part.exercises, 0)
  return(
    <>
    <p>
        {parts[2].name} {parts[2].exercises}
      </p>
      <p>Number of exercises{exercisesTotal}</p> 
    </>
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
  return (
    <>
      <Header props={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

export default App