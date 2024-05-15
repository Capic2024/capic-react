import React from "react";
import styled from 'styled-components';
import { useState } from 'react';
import xcircle from '../image/XCircle.svg';
import { pickListState } from '../recoil';
import { useRecoilValue, useRecoilState } from "recoil";
import { useEffect } from "react";

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
    margin-left: 1rem;
    margin-right: 1rem;
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


function SliderContent({ urlData, index }) {
    const [pickList, setPickList] = useRecoilState(pickListState);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(pickList.includes(index));
    }, [pickList, index]);

    const toggleClass = () => {
        setIsActive(!isActive);

        const indexExists = pickList.includes(index);
        if (indexExists) {
            const updatedPickList = pickList.filter(item => item !== index);
            setPickList(updatedPickList);
        } else {
            const updatedPickList = [...pickList, index];
            setPickList(updatedPickList);
        }
    };

    return (
        <Div onClick={toggleClass}>
            <BoxStyle>
                <ImgStyle className={isActive ? "active" : ""} src={urlData} alt="Slider Image"/>
                {isActive && <XCircle src={xcircle} alt="X Circle"/>}
            </BoxStyle>
        </Div>
    );
}


export default SliderContent;
