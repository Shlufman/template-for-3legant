import React from 'react';
import styles from "./ElementsText.module.scss";
interface  Props{
    text:string;
    className?: string;
}
function ElementsText({text, className}: Props) {
    return (
        <div className={`${styles.baseClass} ${className}`}>{text}</div>
    );
}

export default ElementsText;