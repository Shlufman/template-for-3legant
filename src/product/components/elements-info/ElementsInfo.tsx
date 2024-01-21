import React from 'react';
import styles from "./ElementsInfo.module.scss";
import ElementsRating from "../elements-rating/ElementsRating";
import ElementsTitle from "../elements-title/elementsTitle";
import ElementsText from "../elements-text/ElementsText";
import ElementsPrice from "../elements-price/ElementsPrice";
import {ProductInfo} from "../../../constants/type";
interface Props{
    className?:string;
    productInfo:ProductInfo;
}

function ElementsInfo({productInfo,className}:Props) {
    return (
        <div className={`${styles.baseClass} ${className}`}>
            <ElementsRating rating={productInfo.rating}/>
            <ElementsTitle title={productInfo.title}/>
            <ElementsText text={productInfo.text}/>
            <ElementsPrice currencyCode={productInfo.currencyCode}  price={productInfo.price} currentPrice={productInfo.currentPrice}/>
        </div>
    );
}

export default ElementsInfo;