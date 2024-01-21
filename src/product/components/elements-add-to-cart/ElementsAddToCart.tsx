import React from 'react';
import styles from "./ElementsAddToCart.module.scss";
import ElementsQuantity from "../elements-quantity/ElementsQuantity";

interface Props {
    title?: string;
    className?: string;
}

function ElementsAddToCart({title, className}: Props) {
    const titleDefault: string = "Add to Cart";
    return (
        <div className={`${styles.baseClass} ${className}`}>
            <ElementsQuantity/>
            <div className={styles.btnAddToCart}>{title ?? titleDefault}</div>
        </div>
    );
}

export default ElementsAddToCart;