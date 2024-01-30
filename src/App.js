import { useState, useEffect } from 'react';
import './App.css';
import FormNotes from './Components/FormNotes/FormNotes';
import ListNotes from './Components/ListNotes/ListNotes';
import NavBar from './Components/NavBar/NavBar';
import { getNotes } from './services/notes/notesServices';


const App = () => {
  const [notes, setNotes] = useState(undefined)

  const handleFilterWord = (word) => {
    setNotes((prev) => prev.filter(obj => Object.values(obj).some( value => 
        typeof value === 'string' && value.includes(word)
    )))
  }

  const fetchData = async () => {
    try {
      const data = await getNotes();
      setNotes(data)
    } catch (error) {
      console.error('Error al llamar a getNotes:', error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <NavBar handleFilter={handleFilterWord}/>
      <div className="App">
        <ListNotes notes={notes} />
        <FormNotes setNotes={fetchData} />
      </div>
    </>
    
  );
}

export default App;
