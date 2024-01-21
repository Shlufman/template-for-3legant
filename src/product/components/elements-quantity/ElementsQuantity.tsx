import React, {useState} from 'react';
import styles from "./ElementsQuantity.module.scss";
import {ReactComponent as Heart} from "./images/heart.svg";

interface Props {
    className?: string;
}

function ElementsQuantity({className}: Props) {
    const [quantity,setQuantity] = useState(1);
    const handleOnClickAddQuantity =(shift:number)=>{
        if((quantity>1&&shift<0)||(shift>0)){
            setQuantity(prev=>prev+shift);
        }

    };

    return (
        <div className={`${styles.baseClass} ${className}`}>
            <div className={styles.quantityBlock}>
                <svg onClick={()=>{handleOnClickAddQuantity(-1)}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.03656 10H15.7032" stroke="#121212" stroke-width="0.9375" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
                <div className={styles.quantity}>{quantity}</div>
                <svg onClick={()=>{handleOnClickAddQuantity(1)}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.4688 4.16699C10.4688 3.90811 10.2589 3.69824 10 3.69824C9.74112 3.69824 9.53125 3.90811 9.53125 4.16699V9.5316H4.16656C3.90768 9.5316 3.69781 9.74147 3.69781 10.0004C3.69781 10.2592 3.90768 10.4691 4.16656 10.4691H9.53125V15.8337C9.53125 16.0925 9.74112 16.3024 10 16.3024C10.2589 16.3024 10.4688 16.0925 10.4688 15.8337V10.4691H15.8332C16.0921 10.4691 16.302 10.2592 16.302 10.0004C16.302 9.74147 16.0921 9.5316 15.8332 9.5316H10.4688V4.16699Z"
                          fill="#121212"/>
                </svg>
            </div>
            <div className={styles.wishlistBtn}>
                <Heart/>{"Wishlist"}
            </div>

        </div>
    );
}

export default ElementsQuantity;