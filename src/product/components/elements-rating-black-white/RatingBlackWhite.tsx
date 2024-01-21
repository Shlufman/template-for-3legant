import { RatingStarBlackWhite } from "./RatingStarBlackWhite";

import styles from './style.module.scss';

interface Props{
    rating: number;
    className?:string;
    heightStar?:string;
    starGap?:string;

}

export const RatingBlackWhite = ({rating, className, heightStar,starGap}:Props)=>{

    const renderStarts = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<RatingStarBlackWhite key={i} fraction={rating-i} height={heightStar}/>);
        }
        return stars;
      };

    return (
        <div className={`${styles.rating} ${className}`} style={{columnGap:starGap}}>
            {
                renderStarts()
            }            
        </div>
    );
};