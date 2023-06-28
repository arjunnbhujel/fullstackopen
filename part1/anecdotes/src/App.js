import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Detail = ({text, votes}) => {
  return (
    <div>
      <p>{text}</p>
      <p>---has {votes} Votes</p>
    </div>
  )

}

const MostVoted = ({anecdotes, vote}) => {
  const max = Math.max(...vote);
  const mostVotedIndex = vote.indexOf(max)

  if (max === 0) {
    return (
      <div>
        <p>No votes yet.Please Vote your favourite Anecdotes.</p>
      </div>
    )
  }

  return (
       <Detail text = {anecdotes[mostVotedIndex]} votes = {max} />
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const randomSelect = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  }

  const voteSet = () => {
    const updatedVotes = [...vote]
    updatedVotes[selected] += 1
    setVote(updatedVotes)
  }

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <Detail text = {anecdotes[selected]} votes = {vote[selected]} />
      <Button handleClick = {randomSelect} text = 'Next' />
      <Button handleClick = {voteSet} text = 'Vote' />

      <h1>Anecdotes With Most Votes</h1>
      <MostVoted anecdotes = {anecdotes} vote = {vote} />
    </div>
  )
}

export default App;
