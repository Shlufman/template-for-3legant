import React from 'react';
import styles from "./ElementsTitle.module.scss";

interface Props{
 title:string;
 className?:string;
}
function ElementsTitle({title, className}: Props) {
    return (
        <div className={`${styles.baseClass} ${className}`}>{title}</div>
    );
}

export default ElementsTitle;