import React, {useEffect, useRef, useState} from 'react';
import styles from "./ElementsSliderItems.module.scss";
import {ReactComponent as ArrowLeft} from "./images/arrow-left.svg";
import {ReactComponent as ArrowRight} from "./images/arrow-right.svg";
import {ReactComponent as ArrowBackward} from "./images/arrow-backward.svg";
import {ReactComponent as ArrowForward} from "./images/arrow-forward.svg";
import Slider from "../../../constants/slider/Slider";
import blackChoose from "../../../constants/images/black.png";
import greyChoose from "../../../constants/images/grey.png";
import redChoose from "../../../constants/images/red.png";
import whiteChoose from "../../../constants/images/white.png";

interface Props {
    className?: string;
    width?: number;
    list: Array<ChooseColor>;
    activeId: string;
    onClickSetActive: (id: string) => void;
}

type ChooseColor = {
    id: string;
    url: string;
    color: string;
    width: number;
}


function ElementsSliderItems({className, list, activeId, onClickSetActive, width = 72}: Props) {
    const myDivRef = useRef<HTMLDivElement>(null);
    const [first, setFirst] = useState<number>(0);
    const [count, setCount] = useState(1);
    const [currentWidth, setCurrentWidth] = useState(0);
    const [isActiveArrows, setIsActiveArrows] = useState(false);
    const [isActiveLeftArrow, setIsActiveLeftArrow] = useState(false);
    const [isActiveRightArrow, setIsActiveRightArrow] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (myDivRef.current) {
                // Обработка изменений размеров
                const currentWidth = myDivRef.current.offsetWidth;
                console.log('Текущая ширина div:', currentWidth);
                setCurrentWidth(currentWidth);
                const temp = Math.floor(currentWidth / width);
                setCount(temp);
                if (list.length > temp) {
                    setIsActiveArrows(true);
                } else {
                    setIsActiveArrows(false);
                }
                console.log(currentWidth);
                console.log(temp);
            }
        };
        handleResize(); // Вызывать сразу после монтирования компонента

        // Добавляем слушатель события изменения размеров
        window.addEventListener('resize', handleResize);

        // Очистка слушателя при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [myDivRef]);

    const handleOnClickShift = (shift: number) => {
        setFirst(prev => {
                if ((prev > 0 && shift < 0) || (prev < list.length + 1 - count && shift > 0))
                    return prev + shift;
                return prev;
            }
        )
    }
    useEffect(() => {
        if (first === 0) {
            setIsActiveLeftArrow(false);
        }else {
            setIsActiveLeftArrow(true);
        }
        if(first ===  list.length + 1 - count){
            setIsActiveRightArrow(false);
        }else{
            setIsActiveRightArrow(true);
        }
    }, [first]);

    return (
        <div className={`${styles.baseClass} ${className}`} ref={myDivRef}>
            {isActiveArrows &&
                <>
                    {isActiveLeftArrow&&<div className={styles.leftButtonArrow}><ArrowBackward className={styles.leftArrow}
                                                                            onClick={() => {
                                                                                handleOnClickShift(-1)
                                                                            }}/></div>}
                    {isActiveRightArrow&&<div className={styles.rightButtonArrow}><ArrowForward className={styles.rightArrow}
                                                                            onClick={() => {
                                                                                handleOnClickShift(1)
                                                                            }}/></div>}
                </>
            }

            {list.slice(first, first + count-1).map((el, index) =>
                <img className={`${styles.image} ${el.id === activeId ? `${styles.active}` : ""}`} key={el.id} src={el.url} onClick={() => {
                    onClickSetActive(el.id);
                }} draggable="false"/>
            )}
        </div>
    );
}

export default ElementsSliderItems;