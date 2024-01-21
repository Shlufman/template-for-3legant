import React from 'react';

import styles from './ElementsSliderArea.module.scss'

import img1 from './images/Paste Image1.png'
import img2 from './images/Paste Image2.png'
import img3 from './images/Paste Image3.png'


interface Props{

}
function ElementsSliderArea(props: Props) {
    return (
        <div className={styles.area}>
            <img src={img1} className={styles.img}/>
            <img src={img2} className={styles.img}/>
            <img src={img3} className={styles.img}/>
        </div>
    );
}

export default ElementsSliderArea;