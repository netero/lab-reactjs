import React,{Component} from 'react'

class CarItem extends Component{
    render(){
        const {car} =this.props
        return <ul><b>Nombre: </b>{car.name}<br/><b>Capacidad: </b>{car.capacity}</ul>
    }
}

export default class ListExample extends Component{
    constructor(){
        super()
        this.state={multiply:2}
        setInterval(()=>{
            this.setState({multiply:this.state.multiply+1})
        },1000)
    }
    render(){
        const array=[1,1,3,4,5]
        const arrayObjetos=[
            {id:'a2d-111-qqqq',name:'Ford Fiesta',capacity:6},
            {id:'a2d-112-qqqq',name:'Suzuki Celerio',capacity:5},
            {id:'a2d-113-qqqq',name:'Chevrolet Spark',capacity:4},
            {id:'a2d-114-qqqq',name:'Audi A3',capacity:5},
        ]
        return <div>
            <h4>Trabajando con listas</h4>
            {array.map((number,index)=><div key={index}>Numero {index!==1?number:this.state.multiply*number}</div>)}

            <h4>Listas de objetos</h4>
            <ul>
                {arrayObjetos.map(car=><CarItem key={car.id} car={car}/>)}
            </ul>
        </div>
    }
}