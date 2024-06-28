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
  return (
    <div>
      <Part name={parts[0].name} excerciseCount={parts[0].exercises} />
      <Part name={parts[1].name} excerciseCount={parts[1].exercises} />
      <Part name={parts[2].name} excerciseCount={parts[2].exercises} />
    </div>
  )
}
const Total = (props) => {
  const parts = props.parts
  let maara = 0
  for (let i = 0; i < parts.length; i++) {
    maara += parts[i].exercises
  }
  return (
    <div>
      <p>Number of exercises {maara}</p>
    </div>
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
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


export default App