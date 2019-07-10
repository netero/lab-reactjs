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

class Text extends Component{
  render(){
    return <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{this.props.boolean?"True":"False"}</p>
        <p>{this.props.arrayOfNumbers.join(', ')}</p>
        <p>{this.props.objectWithInfo.key}</p>
      </div>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Bienvenidos a este curso."/>
        <Hello2 title="Bienvenidos a este curso - Con clases."/>
        <Text
          arrayOfNumbers={[2,3,10]}
          boolean={true} 
          number={2} 
          objectWithInfo={{key:'value', key2:'otherValue'}}
          text="hola" 
          />
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
