import './App.css';
import FormNotes from './Components/FormNotes/FormNotes';
import ListNotes from './Components/ListNotes/ListNotes';
import NavBar from './Components/NavBar/NavBar';


const App = () => {
  return (
    <>
    <NavBar />
      <div className="App">
      <ListNotes />
      <FormNotes />
    </div>
    </>
    
  );
}

export default App;
