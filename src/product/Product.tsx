import React from 'react';
import styles from './Product.module.scss';
import ProductLoop from "./components/product-loop/ProductLoop";

interface Props {

}

function Product(props: Props) {
    return (
        <div>
            <div style={{height: "150px"}}></div>
            <ProductLoop/>
        </div>
    );
}

export default Product;