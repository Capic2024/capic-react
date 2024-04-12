import React from "react";

function SliderContent({
    url
}){
    const boxStyle={
        width: '11.25rem',
        height: '11.25rem',
        borderRadius: '0.5rem',
        // position:"relative",
    };
    const imgStyle={
        width: '11.25rem',
        height: '11.25rem',
        borderRadius: '0.5rem'
    };
    
    return(
        <div>
            <div style={boxStyle}>
                <img src={url} style={imgStyle} alt="" />
            </div>
        </div>
    );
}

export default SliderContent;