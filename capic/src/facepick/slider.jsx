import styled from "styled-components";
import React,{useEffect, useState} from "react";
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider0 from "../testimg/gongyoo2.jpg";
import Slider1 from "../testimg/goognyoo.png";
import Slider2 from "../testimg/img_1.png";
import Slider3 from "../testimg/img_2.png";
import Slider4 from "../testimg/img.png";
import Slider5 from "../image/main1.png";
import Slider6 from "../image/main1.png";
import Slider7 from "../image/main1.png";
import Slider8 from "../image/main1.png";
import SliderContent from "./slidercontent";
import axios from 'axios';
import { Link } from "react-router-dom";
// import left from "../image/left.png";
// import right from "../image/right.svg";
// import main1 from "../image/main1.png";
// import React, { useState } from 'react';


const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    margin-top : 3.87rem;
    padding-top : 2.5rem;
    background: #F3F5FF;
`;

function Slider(){

    const TitleStyle = {
        color: '#191B24',
        fontFamily: 'NanumSquare',
        fontSize: '1.5rem',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginTop:"2.5rem",
        marginBottom:"1.13rem",
        marginLeft : "3rem",
    };

    const CustomPrevArrow = (props) => (
        <div className="slick-prev" onClick={props.onClick} >
        </div>
    );
    const CustomNextArrow = (props) => (
        <div className="slick-next" onClick={props.onClick} >
        </div>
    );

    const urlData = [
        Slider0,
        Slider1,
        Slider2,
        Slider3,
        Slider4,
        Slider5,
        Slider6,
        Slider7,
        Slider8
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        prevArrow: <CustomPrevArrow />, 
        nextArrow: <CustomNextArrow />, 
    };

    const divStyle = {
        marginRight : "5rem",
        marginLeft:"5rem",
    }

    return(
        // <Wrapper>
            <div style={{backgroundColor:"#F3F5FF", height:"100vh"}}>
                <p style={TitleStyle}>CAPIC이 인식한 얼굴</p>
                <div style={divStyle}> 
                    <Slide {...settings}>
                            {urlData.map((url, index) => (
                                <div key={index}>
                                    <SliderContent url={url}/>
                                </div>
                            ))}
                    </Slide>
                </div>
            </div>
        // </Wrapper>
    )
}

export default Slider;

// const SliderWrapper = styled.div`
//     width: 80%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

// const Title = styled.h2`
//     font-size: 24px;
//     margin-bottom: 20px;
// `;

// const PickContainer = styled.div`
//     display: flex;
//     align-items: center;
// `;

// const LeftArrow = styled.img`
//     width: 50px;
//     cursor: pointer;
// `;

// const RightArrow = styled.img`
//     width: 50px;
//     cursor: pointer;
// `;

// const ImgContainer = styled.img`
//     width: 200px;
//     height: 200px;
//     margin: 0 10px;
// `;

// function SliderComponent() {
//     const [images, setImages] = useState([main1, main1, main1, main1, main1]); // 이미지 배열 상태
//     const [currentIndex, setCurrentIndex] = useState(0); // 현재 인덱스 상태

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)); // 다음 슬라이드로 이동
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)); // 이전 슬라이드로 이동
//     };

//     return (
//         <Wrapper>
//             <SliderWrapper>
//                 <Title>CAPIC이 인식한 얼굴</Title>
//                 <PickContainer>
//                     <LeftArrow src={left} onClick={prevSlide} />
//                     <ImgContainer src={images[currentIndex]} />
//                     <RightArrow src={right} onClick={nextSlide} />
//                 </PickContainer>
//             </SliderWrapper>
//         </Wrapper>
//     );
// }

// export default SliderComponent;

