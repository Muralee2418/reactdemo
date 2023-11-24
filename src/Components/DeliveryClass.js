import { Component } from "react";
class DeliveryClassComp extends Component{
    constructor(props){
        super(props)
        this.state={location:"Chennai"}


    }

    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({location:e.target.value})

    }

    render(){
        return(
            <div>
                <h4>your order will be delivered to {this.state.location}</h4>
                <input type="text" placeholder="enter location" onChange={(e)=>this.handleChange(e)} />
            </div>
        )
    }
}

export default DeliveryClassComp