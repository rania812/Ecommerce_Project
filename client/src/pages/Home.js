import React, { useState, useEffect } from 'react';
import './Home.css';
import Products from '../component/Products';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideInterval, setSlideInterval] = useState(null);

    const images = [
        'https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide(currentSlide => (currentSlide + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        setSlideInterval(intervalId);

        return () => {
            clearInterval(intervalId);
        };
    }, [images.length]);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
        clearInterval(slideInterval);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
        clearInterval(slideInterval);
    };

    return (
        <div className="App">
            <div className="slider-container">
                <img className="slider-image" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                <div className="prevBtn" onClick={prevSlide}>❮</div>
                <div className="nextBtn" onClick={nextSlide}>❯</div>
            </div>
            <Products/>
        </div>
    );
}

export default Home;
