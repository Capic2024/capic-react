import React from "react";
import styled from 'styled-components';


const Div = styled.div`
    display: flex;
    flex-direction : row;
    justify-content : center;
    margin-bottom : 1.75rem;
`;

const BoxStyle = styled.div`
    width: 11.25rem;
    height: 11.25rem;
    border-radius: 0.5rem;
    cursor : pointer;
`;

const ImgStyle = styled.img`
    width: 11.25rem;
    height: 11.25rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 8px 0px rgba(191, 196, 216, 0.40);
`;

function SliderContent({url})
{
    return(
        <Div>
            <BoxStyle>
                <ImgStyle src={url}/>
            </BoxStyle>
        </Div>
    );
}

export default SliderContent;