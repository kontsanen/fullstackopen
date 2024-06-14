const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )

}

const Content = (props) => {
  return (
    <div>
      <p>{props.name} {props.excerciseCount}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.count}</p>
    </div>
  )
}





const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content name={part1} excerciseCount={exercises1} />
      <Content name={part2} excerciseCount={exercises2} />
      <Content name={part3} excerciseCount={exercises3} />
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App