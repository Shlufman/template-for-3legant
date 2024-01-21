import React from 'react';
import styles from './ElementsRating.module.scss';
import {ReactComponent as Star} from './images/Star Icon.svg'
import {fakeReviews} from './../../../constants/fakeConstatnts';
import {Rating} from "../elements-rating-blue-grey";
import {RatingBlackWhite} from "../elements-rating-black-white";
import {RatingSimple} from "../elements-rating-simple";

interface Props {
    rating: number;
    reviews?: number;
    className?:string;
}

function ElementsRating({rating, reviews, className}: Props) {

    return (
        <div className={`${styles.baseClass} ${className}`}>

            <RatingSimple rating={rating} heightStar={"16px"} starGap={"4px"}/>
            <div className={styles.title}>
                {reviews || fakeReviews} Reviews
            </div>
        </div>
    );
}

export default ElementsRating;