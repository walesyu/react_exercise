import React from 'react';
import Logo from './components/Logo';
import './App.css';
import 'typeface-roboto';
import ToDo from "./components/ToDo";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Logo text="this is a react"/>
          <ToDo/>
        </header>
      </div>
  );
}

export default App;
