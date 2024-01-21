import React from 'react';
import styles from "./ElementsTimerBlocks.module.scss";

interface Props {
number: number;
caption:string;
}

function ElementsTimerBlocks({number, caption}: Props) {
    return (
        <div className={styles.baseClass}>
            <div className={styles.timerNumberCell}>
                {String(number).padStart(2, '0')}
            </div>
            <div className={styles.caption}>
                {caption}
            </div>
        </div>
    );
}

export default ElementsTimerBlocks;