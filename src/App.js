import React from 'react';
import Logo from './components/Logo';
import './App.css';
import 'typeface-roboto';
import ToDo from "./components/ToDo";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Logo name="this is a react"/>
        </header>
        <ToDo/>
      </div>
  );
}

export default App;
