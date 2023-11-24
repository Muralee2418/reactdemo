import React from 'react';
import { useState } from 'react';
import styles from './Products.module.css'
import { Link } from 'react-router-dom';
import { productlist } from './productsinfo';
import DeliveryComp from './DeliveryComp';
//import "./Products.css"

function Products(props) {
    let available_product={backgroundColor:"green"}
    let outofstock={backgroundColor:"red"}

    const [products,setProducts]=useState(productlist)
   
    //cond?true statement:flase statement

    let deleteProduct=(pid)=>{
        console.log("delete product..")
        console.log(pid)
        let f_products=products.filter((p)=>p.pid!==pid)
        setProducts([...f_products])
        }
    
  let product_list=products.map((p,index)=><tr style={p.instock?available_product:outofstock}  key={index}>
  <td>{p.pid}</td>
  <td><Link to={"/products/"+p.pid+"/"+p.pname}>{p.pname}</Link></td>
  <td>{p.pbrand}</td>
  <td>{p.pprice}</td>
  <td>{p.instock?<button>buy now</button>:<h3>out of stock!!</h3>}</td>
  <td><button onClick={()=>deleteProduct(p.pid)}>Delete</button></td>
  <td><button onClick={()=>addprodtocart(p.pid)}>add cart</button></td>
</tr>)

let addprodtocart=(pid)=>{
    console.log(pid)
    let selected_prod=products.find((p)=>p.pid==pid)
    console.log(selected_prod)
    props.setCart([...props.cart,selected_prod])

}

let addProduct=()=>{
    console.log("adding product...")
    let newProduct={
        pid:products.length+1,
        pname:"Mobile",
        pbrand:"Samsung",
        pprice:10000,
        instock:true

    }
    setProducts([...products,newProduct])
    console.log(products)
}
    return (
        <div >
            <button className={styles.primary} onClick={addProduct}>add product</button>
            <table className='table'>
                <tr >
                    <th>Pid</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>stock details</th>
                    <th>action</th>
                </tr>
              {product_list}
            </table>

            <DeliveryComp></DeliveryComp>
            
        </div>
    );
}

export default Products;