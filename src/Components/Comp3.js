import { Component } from "react";

class Comp3 extends Component{
    constructor(props){
        super(props)
        this.state={time:"4:30",counter:0}
    }
    increment=()=>{

    if(this.state.counter<this.props.max)
    {
    this.setState({counter:this.state.counter+1})
     //this.state.counter=this.state.counter+1
    }

    }
    decrement=()=>{
        if(this.state.counter>=this.props.min)
        {
        this.setState({counter:this.state.counter-1})
        }
      }
      
    
    render(){
        //this.setState({time:"5:30"})

        //this.state.time="6:30"
        //this.props.msg="testing props"
        console.log("render executed..")
        //this.state.counter=this.state.counter+1
        return(
            <div>
            
            <button onClick={this.decrement}>decrement</button>
            <h3>{this.state.counter}</h3>
            <button onClick={this.increment}>increment</button>
            </div>
        )
    }

}

export default Comp3