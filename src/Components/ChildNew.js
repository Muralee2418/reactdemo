import { Component } from "react";


class ChildNew extends Component{
    constructor(props){
        super(props)
        console.log("Child constructor")
        this.state={info:"Hello"}
    }
    static getDerivedStateFromProps(newprops,state){
        console.log("child derived state from props..")
        return ({
            info:newprops.info
        })
    }

    shouldComponentUpdate(newprops,newstate){
       if(newstate.info===this.state.info)
       {
        return false
       }
       return true

    }

    render(){
        console.log("Child render")
        return(
            <div>
                <h3>Child:{this.state.info}</h3>
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("child comp getsnapshot before update")
        console.log("old info:"+prevprops.info+"old state:"+prevstate.info)
    }

    componentDidUpdate()
    {
        console.log("child comp did update")
    }

    componentDidMount(){
        console.log("child did mount")
    }

    componentWillUnmount(){
        console.log("Child comp is unmouted..")
    }
}

export default ChildNew