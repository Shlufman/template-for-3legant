import React, { useState } from 'react';
import './Slider.css';
import black from "./../images/black.png"

const images = [
    black,

    // Добавьте еще URL изображений, если необходимо
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    return (
        <div className="slider-container">
            <button className="slider-button left" onClick={prevSlide}>&lt;</button>
            <div className="slides-container">
                {images.map((imageUrl, index) => (
                    <div
                        key={index}
                        className={`slide ${currentSlide === index ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    ></div>
                ))}
            </div>
            <button className="slider-button right" onClick={nextSlide}>&gt;</button>
        </div>
    );
};

export default Slider;
