import React from 'react';
import imgMain from './images/Paste image.png';
import styles from './ElementsSlider.module.scss'
import ElementsSliderArea from "../elements-slider-area/ElementsSliderArea";

interface Props{

}
function ElementsSlider(props:Props) {
    return (
        <div>
            <img className={styles.slider} src={imgMain} alt={'goods'}/>
            <ElementsSliderArea/>
        </div>
    );
}

export default ElementsSlider;