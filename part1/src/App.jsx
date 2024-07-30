const Header = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  return (
      <div>
          <h1>{course}</h1>
          <p>
              {part1} {exercises1}
          </p>
      </div>
  )
}

const Content = () => {
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  return (
      <div>
          <h1>{part2}</h1>
          <p>
              {part2} {exercises2}
          </p>
      </div>
  )
}
const Total=()=>{
  const part3 = 'State of a component'
  const exercises3 = 14
  const exercises1 = 10
  const exercises2 = 7

  return(
    <>
    <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> 
    </>
  )
}

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Total />
    </>
  )
}

export default App