import React from 'react';
import styles from "./ElementsMeta.module.scss";

interface Props {
    className?: string;
    sku:string;
    category:string;
}

function ElementsMeta({className, sku,category}: Props) {
    return (
        <div className={`${styles.baseClass} ${className}`}>
            <div className={styles.row}>
                <div className={styles.title}>
                    {"CKU"}
                </div>
                <div className={styles.value}>
                    {sku}
                </div>
            </div>
            <div className={styles.row}>
                <div  className={styles.title}>
                    {"CATEGORY"}
                </div>
                <div className={styles.value}>
                    {category}
                </div>
            </div>
        </div>
    );
}

export default ElementsMeta;