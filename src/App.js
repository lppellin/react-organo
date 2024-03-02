import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Teams from './components/Teams';
import Footer from './components/Footer';


function App() {

  const teams = [
    {
      nome: 'Programação',
      primaryColor: '#57C278',
      altColor: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      primaryColor: '#82CFFA',
      altColor: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      primaryColor: '#A6D157',
      altColor: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      primaryColor: '#E06B69',
      altColor: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      primaryColor: '#DB6EBF',
      altColor: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      primaryColor: '#FFBA05',
      altColor: '#FFF5D9'

    },
    {
      nome: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      altColor: '#FFEEDF'
    }
  ]

  const [people, setPeople] = useState([])

  const addedNewPerson = (person) => {
    debugger
    console.log(person)
    setPeople([...people, person])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(time => time.nome)} addedPerson={person => addedNewPerson(person)} />
      {teams.map(time => <Teams
        key={time.nome}
        nome={time.nome}
        primaryColor={time.primaryColor}
        altColor={time.altColor}
        people={people.filter(person => person.time === time.nome)}
      />)}
      <Footer />

    </div>
  )
}

export default App;
