import React, { useState } from "react";
import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";
import "./slider.css";
import sliderData from "../../data/sliderData";

function Slider() {
    const [sliderIndex, setSliderIndex] = useState(1);

    function toggleImage(indexPayload) {
        let newState
        if(indexPayload + sliderIndex > sliderData.length) {
            newState = 1
        }

        else if(indexPayload + sliderIndex < 1) {
            newState = sliderData.length
        }

        else {
            newState = indexPayload + sliderIndex
        }

        setSliderIndex(newState);
    }

    return(
        <>
            <p className="index-info">{sliderIndex} / {sliderData.length}</p>
            <div className="slider">
                <p className="image-info">{sliderData.find(obj => obj.id === sliderIndex).description}</p>
                <img src={`/images/img-${sliderIndex}.jpg`} alt="estate rooms" className="slider-img" />

                <button
                onClick={() => toggleImage(-1)}
                 className="navigation-button prev-button">
                    <img src={leftChevron} alt="previous image" />
                </button>
                <button
                onClick={() => toggleImage(1)}
                 className="navigation-button next-button">
                    <img src={rightChevron} alt="next image" />
                </button>
            </div>
        </>
    )
}

export default Slider;
