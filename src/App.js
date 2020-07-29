import React from "react";
import "./App.css";
import NasaData from './components/NasaData.js'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <p>---------------------------------------------------------------------------</p>
      
      <div className="image">
        <NasaData/>    
      </div>

    </div>
  );
}

export default App;
