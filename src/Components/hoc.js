import { Component } from "react";

export let BaseCompent=(OrginalComp)=>{
    class EnhancedComp extends Component{
        render(){
            return(
            <div>
                <h1>Additional Logics</h1>
                <OrginalComp/>
            </div>)
        }
    }

    return EnhancedComp
    

}
