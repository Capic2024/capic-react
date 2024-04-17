import styled from "styled-components";
import React,{useEffect, useState} from "react";
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderContent from "./slidercontent";
import axios from 'axios';
import { Link } from "react-router-dom";
import left from "../image/left.png";
import right from "../image/right.svg";
// import React, { useState } from 'react';



const ArrowButton = styled.img`
    width: 2.75rem;
    height: 2.75rem;
    z-index: 100;
    cursor: pointer;
    font-size : 2.75rem;
    &:hover{
        opacity : 0.5;
    }
`;

const Wrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    background-color: #F3F5FF;
    height: 100vh;
`;

const Div = styled.div`
    backgroundColor: #F3F5FF;
    width : 73.75rem;
`;

function Slider({urlData}){

    const TitleStyle = {
        color: '#191B24',
        fontFamily: 'NanumSquare',
        fontSize: '1.5rem',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginTop:"3rem",
    };

    const SlideContainer = {
        display: 'flex',
        flexDirection : 'column'
    }


    const CustomPrevArrow = (props) => (
        <ArrowButton className="slick-prev" onClick={props.onClick} src={left}/>
    );
    
    const CustomNextArrow = (props) => (
        <ArrowButton className="slick-next" onClick={props.onClick} src={right}/>
    );

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        dotsClass: "slick-dots",
        prevArrow: <CustomPrevArrow />, 
        nextArrow: <CustomNextArrow />, 
    };

    return(
        <Wrapper>
            <Div>
                <p style={TitleStyle}>CAPIC이 인식한 얼굴</p>
                    <Slide {...settings}>
                            {urlData.map((url, index) => (
                                <div key={index} style={SlideContainer}>
                                    <SliderContent url={url}/>
                                </div>
                            ))}
                    </Slide>
            </Div>
       </Wrapper>
    );
}

export default Slider;

