import React, {useEffect, useState} from 'react';
import styles from "./ElementsChooseColor.module.scss";
import blackChoose from "../../../constants/images/black.png";
import greyChoose from "../../../constants/images/grey.png";
import redChoose from "../../../constants/images/red.png";
import whiteChoose from "../../../constants/images/white.png";
import {IterableDTO} from "../../../constants/type";
import ElementsSliderItems from "../elements-slider-items/ElementsSliderItems";
import {ReactComponent as Open} from "./images/open.svg";
import {ReactComponent as Closed} from "./images/closed.svg";

interface Props {
    title?: string;
    className?: string;
    selectable: Array<ChooseColor>;
    activeColor: string;
}

type ChooseColor = {
    id: string;
    url: string;
    color: string;
    width: number;
}
const chooseColor: Array<ChooseColor> = [
    {id: "1", url: blackChoose, color: "black", width: 72},
    {id: "2", url: greyChoose, color: "grey", width: 72},
    {id: "3", url: redChoose, color: "red", width: 72},
    {id: "4", url: whiteChoose, color: "white", width: 72},
    {id: "5", url: blackChoose, color: "black", width: 72},
    {id: "6", url: greyChoose, color: "grey", width: 72},
    {id: "7", url: redChoose, color: "red", width: 72},
    {id: "8", url: whiteChoose, color: "white", width: 72},

];

function ElementsChooseColor({title, className, selectable}: Props) {
    const defaultTitle = "Choose Color";
    const [activeId, setActiveId] = useState("");
    const [activeColor, setActiveColor] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOnClickSetActive = (id: string) => {
        setActiveId(id);
        setActiveColor(chooseColor.filter(el => el.id === id)[0].color)
    };
    useEffect(() => {
        setActiveId(chooseColor[0].id);
        setActiveColor(chooseColor[0].color)
    }, []);
const handleOnClickOpen =()=>{setIsOpen(prev=>!prev)};

    return (
        <div className={`${styles.baseClass} ${className}`}>
            <div className={styles.row}>
                <div className={styles.title}>{title ?? defaultTitle}</div>
                <div className={styles.elementsChooseColorIcon} onClick={handleOnClickOpen} >
                    {isOpen ? <Open/> : <Closed/>}
                </div>
            </div>
            {/*<div className={styles.row}>*/}
            {!isOpen && <><div
                className={styles.elementsChooseColorName}>{activeColor.charAt(0).toUpperCase() + activeColor.slice(1)}</div>
            <ElementsSliderItems className={styles.elementSlider} list={chooseColor} activeId={activeId}
                                 onClickSetActive={handleOnClickSetActive}/>
            </>}
            {/*</div>*/}
        </div>
    );
}

export default ElementsChooseColor;