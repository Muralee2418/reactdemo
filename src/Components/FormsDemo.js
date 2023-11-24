import React, { useRef, useState } from 'react';
import { productlist } from './productsinfo';
import Products from './Products';

function FormsDemo(props) {
    const[product,setProduct]=useState({pname:"",
pbrand:"",
pprice:0,
instock:false
})

const [pname_error,setpname_error]=useState(false)

let handleChange=(e)=>{
if(e.target.name==="pname")
{
    e.target.value.length>5?setpname_error(false):setpname_error(true)
    if(!pname_error)
    {setProduct({...product,[e.target.name]:e.target.value})}
}
else
{
    setProduct({...product,[e.target.name]:e.target.value})
}
  console.log(product)

}

let handlesubmit=(e)=>{
   e.preventDefault()
   let p_id=productlist.length+1
   productlist.push({...product,pid:p_id})
   console.log(productlist)

}

    return (
        <div>
            <form onSubmit={(e)=>handlesubmit(e)}>
                <div className='mb-2'>
                    <input type="text" name="pname" placeholder='Enter product name' onChange={(e)=>handleChange(e)}/></div>
                    {pname_error?<p>Pls enter valid product name</p>:""}
                <div className='mb-2'><input type="text" name="pbrand" placeholder='Enter product brand' onChange={(e)=>handleChange(e)}/></div>
                <div className='mb-2'><input type="text" name="pprice" placeholder='Enter product pprice' onChange={(e)=>handleChange(e)}/></div>
                <div className='mb-2'><input type="text" name="instock" placeholder='Enter product stock' onChange={(e)=>handleChange(e)}/></div>
                <div className='mb-2'><input type="submit" value="addproduct" /></div>
            </form>
            <Products/>
            
        </div>
    );
}

export default FormsDemo;