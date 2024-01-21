import React from 'react';
import styles from "./ElementsSwatches.module.scss";
import ElementsMeasurements from "../elements-measurements/ElementsMeasurements";
import ElementsChooseColor from "../elements-choose-color/ElementsChooseColor";
import {ChooseColor, IterableDTO} from "../../../constants/type";
interface Props{
    selectable: Array<ChooseColor>;
    activeColor: string;
    className?:string;
}

function ElementsSwatches({selectable,className, activeColor}:Props) {
    return (
        <div className={`${styles.baseClass} ${className}`}>
            <ElementsMeasurements height={"17 1/2"} width={"20 5/8"} unit={"\""}/>
            <ElementsChooseColor className={styles.elementChooseColor} selectable={selectable} activeColor={activeColor}/>
        </div>
    );
}

export default ElementsSwatches;