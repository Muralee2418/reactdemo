import { Component } from "react";
import ChildNew from "./ChildNew";
import { BaseCompent } from "./hoc";

class ParentNew extends Component{

    constructor(props){

        super(props)
        console.log("Parent constructor")
       this.state={msg:"Good morning",displayChild:true}
    
    }

   static getDerivedStateFromProps(){
    console.log("parent derived state from props..")
   }

    render(){
        console.log("Parent render")
        return(
            <div>
                <h1>Parent msg:{this.state.msg}</h1>
                {this.state.displayChild?<ChildNew info={this.state.msg}/>:<p>child is removed</p>}

            </div>
        )
    }



    componentDidMount(){
        console.log("Parent did mount")
        //setTimeout(()=>this.setState({displayChild:false}),3000)
        setTimeout(()=>this.setState({msg:"hi"}),3000)

    }


}

export default BaseCompent(ParentNew);