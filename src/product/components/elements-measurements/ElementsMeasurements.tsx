import React from 'react';
import  styles from "./ElementsMeasurements.module.scss";

interface Props{
    title?:string;
    height: string;
    width: string;
    unit: string;
    classNameTitle?:string;
    classNameSizes?: string;
}
function ElementsMeasurements({title, height, width,unit,classNameTitle,classNameSizes}:Props) {
    const defaultTitle= "Measurements";
    return (
        <div>
            <div className={`${styles.baseClassTitle} ${classNameTitle}`}>{title??defaultTitle}</div>
            <div className={`${styles.baseClassSizes} ${classNameSizes}`}>
                {`${height}×${width} ${unit}`}
            </div>
        </div>
    );
}

export default ElementsMeasurements;