import React from 'react';
import { useParams } from 'react-router-dom';
import { productlist } from './productsinfo';

function ProductDetail(props) {
    let param=useParams()//return values pased in url
    console.log(param)
    let product=productlist.find((p)=>p.pid==param.pid)
    console.log(product)

    
    return (
        <div>
            <h1>{product.pname}</h1>
            <h2>{product.pprice}</h2>
            <h3>{product.pbrand}</h3>
            <h3>{product.instock}</h3>
        </div>
    );
}

export default ProductDetail;