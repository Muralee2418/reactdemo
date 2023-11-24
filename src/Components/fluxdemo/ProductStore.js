import Dispatcher from "./Dispatcher";
import {EventEmitter} from "events";

class ProductStore extends EventEmitter{
    constructor(){
        super()
        this.products=[
            {
                pid:1,
                pname:"Mobile",
                pbrand:"Apple",
                pprice:50000,
                instock:true
             },
             {
                pid:2,
                pname:"Mobile",
                pbrand:"samsung",
                pprice:20000,
                instock:true
             }
        ]
    }

    getAllProducts(){
        return this.products
    }

    handleActions(action)
    {
        switch(action.type)
        {
            case "CREATE":
                console.log("creating product")
                this.products.push(action.product)
                console.log(this.products)
                this.emit("change")
                break
        }
    }
}
let pstore_obj=new ProductStore()
Dispatcher.register(pstore_obj.handleActions.bind(pstore_obj))
export default pstore_obj 
