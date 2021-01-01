import React, { useState} from 'react'
import './App.css';
import Person from './components/Person'
import Findit from './components/Findit'

function App() {
  const [ persons, SetPersons] = useState([
    { name: 'Arto Hellas', numbers: '040-123456' },
    { name: 'Ada Lovelace', numbers: '39-44-5323523' },
    { name: 'Dan Abramov', numbers: '12-43-234345' },
    { name: 'Mary Poppendieck', numbers: '39-23-6423122' }

  ])

  const [ newName, setNewName] = useState('a new name')
  const [ newNumbers, setNewNumbers] = useState('a new number')
  const [ showAll, setShowAll] = useState(true)

  const [ newFilter, setFilter] = useState('a new filter')


  const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name === newFilter)


  const addPerson = (event) => {
    event.preventDefault()
    const personObject =
    {
      name: newName,
      numbers: newNumbers,
      id: persons.length + 1,
    }

    const pos = Findit(persons,newName)

    let msj =  newName + ' is already added to phonebook '

    console.log(msj)
    if (pos>-1) {  
      window.alert(msj)
    }
    else {
      SetPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewNumbers('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumbersChange = (event) => {
    console.log(event.target.value)
    setNewNumbers(event.target.value)
  }  

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }


  return (
    <div>
      <h2>PhoneBook</h2>
      <form onSubmit={addPerson}>
        <h3> Nombre</h3>
        <input value={newName}
               onChange={handleNameChange}
               />
        <h3> Teléfonos </h3>                     
        <input Arto Hellas 
               onChange={handleNumbersChange}
               />  
               <p></p>                            
        <button type="submit">add</button>
      </form>

      <h1>Telephone List</h1>
      <h1>Name | Phone</h1>
      <div>
      <input  value={newFilter}
              onChange={handleFilterChange} 
       />
        <button onClick={() => setShowAll(!showAll)}>
          show {Findit(persons,newFilter) ? 'Filter' : 'all'}
        </button>
      </div>      
      <ul>
        {personsToShow.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>    
  );
  }

export default App;
