import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Teams from './components/Teams';


function App() {

  const teams = [
    {
      nome: 'Programação',
      primaryColor: '',
      altColor: ''
    },
    {
      nome: 'Front-End',
      primaryColor: '',
      altColor: ''
    },
    {
      nome: 'Data Science',
      primaryColor: '',
      altColor: ''
    },
    {
      nome: 'DevOps',
      primaryColor: '',
      altColor: ''
    },
    {
      nome: 'UX e Design',
      primaryColor: '',
      altColor: ''
    },
    {
      nome: 'Mobile',
      primaryColor: '',
      altColor: ''

    },
    {
      nome: 'Inovação e Gestão',
      primaryColor: '',
      altColor: ''
    }
  ]

  const [people, setPeople] = useState([])

  const addedNewPerson = (person) => {
    console.log(person)
    setPeople([...people, person])
  }

  return (
    <div className="App">
      <Banner />
      <Form addedPerson={person => addedNewPerson(person)} />
      <Teams nome="Programação" />
      <Teams nome="Front-End" />
      <Teams nome="Data Science" />
      <Teams nome="DevOps" />


    </div>
  )
}

export default App;
