import { Component } from "react";
export let BaseCounter=(OriginalComp)=>{
  
    class EnhancedComp extends Component{
       constructor(){
        super()
        this.state={counter:0}
       }

       increment=()=>{
        this.setState({counter:this.state.counter+1})
       }
       decrement=()=>{
        this.setState({counter:this.state.counter-1})
       }

       render(){
         return( <OriginalComp inc={this.increment} dec={this.decrement} index={this.state.counter}/>)
       }

    }

    return EnhancedComp
}

