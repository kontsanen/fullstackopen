const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )

}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.excerciseCount}</p>
    </div>
  )
}

const Content = (props) => {
  const parts = props.parts
  const excerciseCounts = props.excerciseCounts
  return (
    <div>
      <Part name={parts[0]} excerciseCount={excerciseCounts[0]} />
      <Part name={parts[1]} excerciseCount={excerciseCounts[1]} />
      <Part name={parts[2]} excerciseCount={excerciseCounts[2]} />
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
      <Content parts={[part1, part2, part3]} excerciseCounts={[exercises1, exercises2, exercises3]} />
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App