const Header = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
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
        <>
          {parts.map(part => 
            <Part key={part.id} name={part.name} excerciseCount={part.exercises} />
          )}
        </>
      </div>
    )
  }
  const Total = (props) => {
    const parts = props.parts
    const initial = 0
    const maara = parts.reduce(
      (kertyma, part) => kertyma + part.exercises, initial,
    );
    
    return (
      <div>
        <h4>Number of exercises {maara}</h4>
      </div>
    )
  }
  
  const Course = (props) => {
    const course = props.course
  
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts}/>
      </div>
    )
  
  }

  export default Course