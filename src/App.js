import { useState, useEffect } from 'react';
import './App.css';
import FormNotes from './Components/FormNotes/FormNotes';
import ListNotes from './Components/ListNotes/ListNotes';
import NavBar from './Components/NavBar/NavBar';
import Spinner from './Components/Spinner/Spinner';
import { getNotes } from './services/notes/notesServices';


const App = () => {
  const [notes, setNotes] = useState(undefined)
  const [currentNotes, setCurrentNotes] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [connection, setConnection] = useState(false)

  const handleFilterWord = (word) => {
    const lowercasedWord = word.trim().toLowerCase()
  
    setNotes(currentNotes.filter(obj => Object.values(obj).some(value => {
      if (typeof value === 'string') {
        const lowercasedValue = value.toLowerCase()
        return lowercasedValue.includes(lowercasedWord)
      }
      return false
    })));
  
    if (word.trim() === "") {
      setNotes(currentNotes)
    }
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      let { resp, data } = await getNotes()
      if (resp.status === 200) {
        
        localStorage.setItem("notes", JSON.stringify(data))
      } else {
        setConnection(true)
        data = localStorage.getItem("notes");
      }
      setNotes(data)
      setCurrentNotes(data)
      
    } catch (error) {
      console.error('Error al llamar a getNotes:', error);
      setConnection(true)
      const  data = JSON.parse(localStorage.getItem("notes"))
      setNotes(data)
      setCurrentNotes(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <NavBar handleFilter={handleFilterWord}/>
      <div className="App">
        <ListNotes notes={notes} />
        <FormNotes 
          setNotes={fetchData} 
          setLoading={setLoading} 
          connection={connection}
        />
        {loading && <Spinner />}
      </div>
    </>
    
  );
}

export default App;
