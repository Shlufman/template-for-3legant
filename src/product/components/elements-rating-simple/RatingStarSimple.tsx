import {ReactComponent as StarFill} from "./images/star-fill.svg";
import {ReactComponent as StarNoneFill} from "./images/star-fill-none.svg";

import styles from './style.module.scss';
import React from "react";

interface Props {
    fraction: number;
    height?: string;
    width?: string;
}

export const RatingStarSimple = ({fraction, height}: Props) => {
    return (
        <div>
            {fraction >= 0.5
                ?<StarFill height={height ?? "16"} width={height ?? "16"}/>
                :<StarNoneFill height={height ?? "16"} width={height ?? "16"}/>
            }

        </div>
    );
};