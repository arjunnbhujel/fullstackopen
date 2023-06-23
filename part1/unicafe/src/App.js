import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleclick}>
      {props.text}
    </button>
  )
}

const StatisticsData = (props) => {
  let {text, value} = props;

  if(text === 'Positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    )
  }

    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
}

const Statistics = (props) => {
  let {good, neutral, bad} = props;

  let total = good + neutral + bad;
  let average = ((good - bad) / total).toFixed(2);
  let percent = ((good / total) * 100).toFixed(2);
  console.log(percent);

  if (total === 0) {
    return (
      <>
        <p>No Feedback Given</p>
      </>
    )
  }

  else {
    return (
      <table>
        <tbody>
          <StatisticsData value={good} text={'Good'} />
          <StatisticsData value={neutral} text={'Neutral'} />
          <StatisticsData value={bad} text={'Bad'} />
          <StatisticsData value={total} text={'Total'} />
          <StatisticsData value={average} text={'Average'} />
          <StatisticsData value={percent} text={'Positive'}/>
        </tbody>
      </table>
    )
  }
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood( n => n + 1);
  }

  const addNeutral = () => {
    setNeutral(n => n + 1);
  }

  const addBad = () => {
    setBad(n => n + 1);
  }


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleclick={addGood} text='Good' />
      <Button handleclick={addNeutral} text='Neutral' />
      <Button handleclick={addBad} text='Bad' />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
