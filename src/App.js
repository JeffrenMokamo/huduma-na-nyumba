import './css/App.css'
import Preload from './composants/Preload'
import React, {  useEffect, useState} from 'react'

function App(){

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {

      setLoading(false)
    }, 3000);

  }, [])

  return (
    <div className="App">
      
      { loading ? (<Preload />) : 
      
      (

        <div>

          <h1>Jeffren Mokamo</h1>
          
        </div>

      )}

    </div>
  );
}

export default App;
