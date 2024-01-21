import React from 'react';
import styles from "./ElementsTimer.module.scss";
import ElementsTimerBlocks from "../elements-timer-blocks/ElementsTimerBlocks";
 interface Props{
     title?: string;
    endDataOffer: number;
    className?: string;
 }
function ElementsTimer({title,endDataOffer,className}: Props) {
     const defaultTitle = "Offer expires in:";
    return (
        <div className={`${styles.baseClass} ${className}`}>
            <div>{title??defaultTitle}</div>
            <div className={styles.elementDate}>
                <ElementsTimerBlocks number={2} caption={"Days"}/>
                <ElementsTimerBlocks number={12} caption={"Hours"}/>
                <ElementsTimerBlocks number={2} caption={"Minutes"}/>
                <ElementsTimerBlocks number={2} caption={"Seconds"}/>
            </div>
        </div>
    );
}

export default ElementsTimer;