import React, { useEffect, useState } from 'react';
import pstore_obj from './ProductStore';
import Dispatcher from './Dispatcher';
function ProductComp(props) {
    const [productlsit,setProductlist]=useState(pstore_obj.getAllProducts())
    useEffect(()=>{pstore_obj.on("change",getProducts)},[])
   
    let getProducts=()=>
    {
       console.log("get products..")
       console.log(pstore_obj.getAllProducts())
        setProductlist( [...pstore_obj.getAllProducts()])
    }
     let addProduct=()=>{
        let temp_product= {
            pid:productlsit.length+1,
            pname:"pendrive",
            pbrand:"hp",
            pprice:200,
            instock:true
         }
      Dispatcher.dispatch({type:"CREATE",product:temp_product})// call handler fucntion
     }
    return (
        <div>
            <ul>
                {productlsit.map(
                    (p)=><li>{p.pname}</li>)}
            </ul>
            <button onClick={addProduct}>add product</button>
        </div>
    );
}

export default ProductComp;