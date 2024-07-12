import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, updateVotes] = useState(Array(anecdotes.length).fill(0));
  const [highest, updateHighest] = useState(0)

  const updateAnecdote = () => {
    const randNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randNum);
    
  }

  const voteAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    console.log(copy);
    updateVotes(copy)
    const highestVoted = () => {
      let highest = 0;
      let highIndex = 0;
      let i = -1;
      copy.forEach(number => {
        i ++
        if (number > highest) {
          highest = number;
          highIndex = i;
        }
      });
      return highIndex;
    };
    const highestVotedIndex = highestVoted();
    updateHighest(highestVotedIndex)
    console.log(highestVotedIndex)
  }


  return (
    <div>
      <h2>
        Anecdote of the day
      </h2>
      {anecdotes[selected]}
      <br/>
      has {votes[selected]} votes
      <br/>
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={updateAnecdote}>Next anecdote</button>
      <h2>
        Anecdote with most votes
      </h2>
      {anecdotes[highest]}
    </div>
  )
};

export default App