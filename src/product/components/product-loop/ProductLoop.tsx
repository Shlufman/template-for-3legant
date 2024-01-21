import React, {useEffect, useState} from 'react';
import styles from './ProductLoop.module.scss';
import ElementsSlider from "../elements-slider/ElementsSlider";
import ElementsRating from "../elements-rating/ElementsRating";
import ElementsTitle from "../elements-title/elementsTitle";
import ElementsText from "../elements-text/ElementsText";

import {productInfo as fakeProduct, customerDetails} from "./../../../constants/fakeConstatnts"
import ElementsPrice from "../elements-price/ElementsPrice";
import ElementsTimer from "../elements-timer/ElementsTimer";
import ElementsSwatches from "../elements-swatches/elementsSwatches";
import {ChooseColor, ProductInfo} from "../../../constants/type";
import ElementsAddToCart from "../elements-add-to-cart/ElementsAddToCart";
import ElementsMeta from "../elements-meta/ElementsMeta";
import elementsMeta from "../elements-meta/ElementsMeta";
import ElementsInfo from "../elements-info/ElementsInfo";

interface Props {
    productInfo?: ProductInfo;
}

function ProductLoop(props: Props) {
    let productInfo: ProductInfo;
    if (props.productInfo) {
        productInfo = props.productInfo;
    } else {
        productInfo = fakeProduct;
    }
    const [activeColor, setActiveColor] = useState<string>(productInfo.chooseColor[0].color);
    useEffect(() => {
        setActiveColor(productInfo.chooseColor[0].color)
    }, []);

    return (
        <div className={styles.baseClass}>
            <div style={{width: "49%", backgroundColor: "#a0a0a0", height: "986px"}}>

                <ElementsSlider/>
            </div>
            <div className={styles.column2} style={{width: "45%", backgroundColor: "#fafafa", height: "986px"}}>


                <ElementsInfo productInfo={productInfo}/>
                <ElementsTimer endDataOffer={+Date()}/>
                <ElementsSwatches selectable={productInfo.chooseColor}
                                  activeColor={activeColor}/>
                <ElementsAddToCart/>
                <ElementsMeta sku={"1117"} category={"Living Room, Bedroom"}/>
            </div>
        </div>
    );
}

export default ProductLoop;