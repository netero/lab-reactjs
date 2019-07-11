import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional';

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
        <p>{this.props.arrayOfNumbers.map(this.props.multiply).join(', ')}</p>
        <p>{this.props.objectWithInfo.key}</p>
        {this.props.title}
      </div>
  }
}

class TextDefaultProp extends Component{
  render(){
    return <h1>{this.props.title}</h1>
  }
}

TextDefaultProp.defaultProps={
  title:"Esto es un título por defecto."
}

class Contador extends Component{
  constructor(props){
    super(props)
    this.state={contador:props.contadorInicial}
    setInterval(()=>{
      this.setState({contador:this.state.contador+1})
    },1000)
  }
  render(){
    return <ContadorNumero numero={this.state.contador}/>
  }
}

class ContadorNumero extends Component{
  render(){
    return <span>{this.props.numero}</span>
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
          multiply={(n)=>n*3}
          title={<h1>Esto es un elemento de react que se pasa como prop</h1>}
          />
          <TextDefaultProp/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos a aprender React
        </a>
        <h3>Estoy usando react</h3>
        <Contador contadorInicial={55}/>
        <ConditionalSection/>
      </header>
    </div>
  );
}

export default App;
