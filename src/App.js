import { useState } from 'react';
import './App.css';
import FormNotes from './Components/FormNotes/FormNotes';
import ListNotes from './Components/ListNotes/ListNotes';
import NavBar from './Components/NavBar/NavBar';
let notes = [
  {
      titulo: 'cocina',
      autor: 'cocina',
      fecha: 'cocina',
      contenido:'loredddddddddddd'
  },
  {
      titulo: '7',
      autor: 'cocina',
      fecha: 'cocina',
      contenido:'loredddddddddddd'
  },
  {
      titulo: '6',
      autor: 'cocina',
      fecha: 'cocina',
      contenido:'loredddddddddddd dfdfs s fs sfdf ffdfffffffffffffffffffffffffffffffffffffffffdddddddddd'
  },
  {
      titulo: '5',
      autor: 'cocina',
      fecha: 'cocina',
      contenido:'loredddddddddddd'
  },
  {
      titulo: '3',
      autor: 'prueba',
      fecha: 'cocina',
      contenido:'loredddddddddddd'
  },
  {
      titulo: '2',
      autor: 'cocina',
      fecha: 'cocina',
      contenido:`asdfsdfsd
      dfgdsfg
      dfgdfg sdfsdfsd fsd fsdf sdf sdf sdf sd fsd sdfsdfsdfsdf sdf  dfgdsfgdsfgxfgdgdsgsdfgsdfgdsgdsfgdfgdfgdsfgd`
  },
]

const App = () => {
  const [notesState, setNotesState] = useState(notes)

  const handleFilterWord = (word) => {
    setNotesState((prev) => prev.filter(obj => Object.values(obj).some( value => 
        typeof value === 'string' && value.includes(word)
    )))
  }

  return (
    <>
      <NavBar handleFilter={handleFilterWord}/>
      <div className="App">
        <ListNotes notes={notesState} />
        <FormNotes />
      </div>
    </>
    
  );
}

export default App;
