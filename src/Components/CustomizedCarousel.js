import Carousel from "react-spring-3d-carousel";
import React, { useState, useEffect } from "react";

const CustomizedCarousel = (props)  => {
    const table = props.cards.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(true);
    const [goToSlide, setGoToSlide] = useState(null);
    const [cards] = useState(table);

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props]);

    return (
        <div
            style={{ width: props.width, height: props.height, margin: props.margin }}
        >
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
            />
        </div>
    );
}

export default CustomizedCarousel;