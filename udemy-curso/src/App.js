import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function Hello(props){
  return <p>
  {props.title}
</p>
}


class Hello2 extends Component{
  render(){
    return <h3>{this.props.title}</h3>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Bienvenidos a este curso."/>
        <Hello2 title="Bienvenidos a este curso - Con clases."/>
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
