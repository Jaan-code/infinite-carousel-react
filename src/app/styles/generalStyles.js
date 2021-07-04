import { css } from "@emotion/react";

export default 
{ 
    sliderWrapper: css`
        position: absolute;
        top: 20%;
        left: 10%;
        width: 80%;
        height: 300px;
        overflow: hidden;
        border: 1px solid black;
    `, 
    slider: css`
        position: absolute;
        inset: 0;
        width: 4000px;
        height: 100%;
        object-fit: cover;
        display: flex;
        background-color: black;
    `, 
    sliderItem: css`
        position: relative;
        flex: 1;
        overflow: hidden;
        filter: grayscale(100%);
    `, 
    image: css`
        position: relative;
        left: 1%;
        top: 2.5%;
        width: 98%;
        height: 95%;
        background-size: cover;
        background-position: center;
    `, 
    justAnElement: css`
        background-image: url(https://picsum.photos/300/300?random=1);
        background-repeat: no-repeat;
        height: 300px;
    `,
    button: css`
        position: absolute;
        top: 50%;
        transform: transitionY(-50%);
        padding: 1em;
        color: #fff;
        background: #222;
    `,
    rightBtn: css`
        right: 0;
    `,
    leftBtn: css`
        left: 0;
    `,
}