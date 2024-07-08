import { useState } from 'react'

const Button = ({handleClick, text}) => {
  
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  )
}


const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const avg = (props.bad * (-1) + props.good) / (all)
  const pos = props.good / (all) * 100

  return (
    <div>
      {all > 0 ? (
        <div>
        <h1>statistics</h1>
        <table><tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={avg} />
          <StatisticLine text="positive" value={pos} />
        </tbody></table>
        </div>
       ) : (
        <p>No feedback given</p>
       )
      }
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App