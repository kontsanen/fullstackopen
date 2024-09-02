import { useState, useEffect } from 'react'
import axios from 'axios'


const Filter = (props) => {
  return (
    <div>
          Filter shown with 
          <input
            value={props.searchValue}
            onChange={props.runSearch}
          ></input>
    </div>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addNumber}>
      <div>
        name: 
        <input
          value={props.newName}
          onChange={props.handleValueChange}
        />
      </div>
      <div>
        number:
        <input 
          value={props.newNumber}
          onChange={props.handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = (props) => {
  return (
  <>
    {props.persons.map((person) =>
      person.name.toLowerCase().includes(props.searchValue.toLowerCase())
        ? (<li key={person.name}>{person.name} {person.number}</li>)
        : null
      )}
  </>
  )
}

const App = () => {

  const [persons, setPersons] = useState([])


  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      const tiedot = response.data
      console.log(tiedot.length)
      console.log(tiedot)

      let newPersons = tiedot.map(persoona => ({
        name: persoona.name,
        number: persoona.number,
      }));

      console.log(newPersons);
    
      setPersons([...persons, ...newPersons]);
      console.log(newPersons);
    })
  }, []);






  const [searchValue, setNewSearchValue] = useState('')
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

  const runSearch = (event) => {
    console.log(event.target.value)
    setNewSearchValue(event.target.value)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchValue} runSearch={runSearch}/>
      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleValueChange={handleValueChange} handleNumberChange={handleNumberChange} addNumber={addNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchValue={searchValue} />
    </div>
  )

}

export default App