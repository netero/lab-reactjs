import React from 'react';
import logo from './logo.svg';
import './App.css';

function Hello(props){
  return <p>
  {props.title}
</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Bienvenidos a este curso."/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos a aprender React
        </a>
        <h3>Estoy usando react</h3>
      </header>
    </div>
  );
}

export default App;
