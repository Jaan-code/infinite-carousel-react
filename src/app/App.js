/** @jsx jsx */
/** jsxFrag React.Fragment */
import React, { useEffect, useRef, useState } from 'react';
import { jsx, css } from "@emotion/react";
import styles from "./styles/generalStyles";
import slides from "./slides.js";
import { nanoid } from "nanoid";

const { sliderWrapper, slider, sliderItem, image, button, rightBtn, leftBtn } = styles;

export default function App(){
    const sliderRef = useRef(null);
    const slideRef = useRef(null);
    let pixelsPerSlide = useRef(0);
    let sliderWidth = useRef(0);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        pixelsPerSlide = slideRef.current.getBoundingClientRect().width;
        sliderWidth = sliderRef.current.getBoundingClientRect().width;
        if ( ((sliderWidth/2) + index) >= sliderWidth ){
            setIndex(0);
        }
        else if ( index < 0 ) {
            setIndex(sliderWidth/2 + index);
        } 
        else {
        }
    },)
    useEffect(()=>{
        sliderRef.current.style.transform = `translateX(${-index}px)`;
        console.log(sliderRef.current.style.transition);
        console.log(index);
    }, [index]);
    return <>
        <div css={ sliderWrapper }>
            <div css={ slider } ref={ sliderRef }>
                {
                    slides.concat(slides).map((slide)=>{
                        return <div key={ nanoid() } css={ sliderItem } ref={ slideRef }>
                            <div css={ [image, css`background-image: url(${slide.img})` ]} >
                            </div>
                        </div>
                    })
                }
                
            </div>
            <button onClick={_=>setIndex(index+pixelsPerSlide)} css={ [ button, leftBtn] }>&#11160;</button>
        <button onClick={_=>setIndex(index-pixelsPerSlide)} css={ [ button, rightBtn] }>&#11162;</button>
        </div>
    </>
}






