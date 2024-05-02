import React from "react";
import styled from 'styled-components';
import { useState } from 'react';
import xcircle from '../image/XCircle.svg';

const Div = styled.div`
    padding-top : 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1.75rem;
`;

const BoxStyle = styled.div`
    position: relative;
    width: 11.25rem;
    height: 11.25rem;
    border-radius: 0.5rem;
    cursor: pointer;
`;

const ImgStyle = styled.img`
    width: 11.25rem;
    height: 11.25rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 8px 0px rgba(191, 196, 216, 0.40);
    &.active{
        border: 4px solid var(--Primary-color, #BF92FB);
    }
`;

const XCircle = styled.img`
    position: absolute;
    top: -14px; 
    right: -14px; 
    width: 2.75rem;
    height: 2.75rem;
    z-index: 1; 
`;



function SliderContent({ url, onSelectImage }) {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive); 
        //onSelectImage(url.index); 
        console.log("url : "+url)
    };

    return (
        <Div onClick={toggleClass}>
            <BoxStyle>
                <ImgStyle className={isActive ? "active" : ""} src={url} alt="Slider Image"/>
                {isActive && <XCircle src={xcircle} alt="X Circle"/>}
            </BoxStyle>
        </Div>
    );
}

// function SliderContent({ url }) {
//     const [isActive, setIsActive] = useState(false);

//     const toggleClass = () => {
//         setIsActive(!isActive); 
//     };

//     return (
//         <Div onClick={toggleClass}>
//             <BoxStyle>
//                 <ImgStyle className={isActive ? "active" : ""} src={url} alt="Slider Image"/>
//                 {isActive && <XCircle src={xcircle} alt="X Circle"/>}
//             </BoxStyle>
//         </Div>
//     );
// }

export default SliderContent;
