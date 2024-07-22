import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0401234567' },
    { name: 'Arto Hella', number: '0401239967' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} löytyy jo listasta!`)
    } else {
      console.log('lisätään', newName)
      setPersons([...persons, { name: newName, number: newNumber }])
    }

  }

  const handleValueChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: 
          <input
            value={newName}
            onChange={handleValueChange}
          />
        </div>
        <div>
          number:
          <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <div>debug: {newName}, {newNumber}</div>
      </form>
      <h2>Numbers</h2>
      <>
        {persons.map((person) =>
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </>
    </div>
  )

}

export default App