import React from 'react';

import styles from "./ElementsPrice.module.scss";
interface Props{
    currencyCode: string;
    price:number;
    currentPrice: number;
    className?: string;
}
function ElementsPrice({currencyCode,price, currentPrice,className}:Props) {
    return (
        <div className={`${styles.baseClass} ${className}`}>
            <span className={`${styles.baseClassCurrentPrice} ${className}`}>{`${currencyCode} ${currentPrice}`}</span>
            <span className={`${styles.baseClassPrice} ${className}`}>{`${currencyCode} ${price}`}</span>
        </div>
    );
}

export default ElementsPrice;