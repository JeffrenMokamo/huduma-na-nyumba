import './App.css';
import Preloader from './composants/Preloader'
import {useEffect, useState} from 'react';

function App() {

  const [chargement, setChargement] = useState(true)

  useEffect(() =>{

    setTimeout(() => {
      
      setChargement(false)

    }, 4000);

  }, [])

  return (
    <div className="App">
      
      { chargement ? (<Preloader />) : (

        <h2>Jeffren</h2>

      )}

    </div>
  );
}

export default App;
