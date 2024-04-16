import styled from "styled-components";
import Box from "./box";
import VideoComponent from './videocomponent';
import Header from "../header/header";
import SliderComponent from "./slider";
import Slider from "react-slick";
import axios from 'axios'
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Slider0 from "../testimg/gongyoo2.jpg";
import Slider1 from "../testimg/goognyoo.png";
import Slider2 from "../testimg/img_1.png";
import Slider3 from "../testimg/img_2.png";
import Slider4 from "../testimg/img.png";
import Slider5 from "../image/main1.png";
import Slider6 from "../image/main1.png";
import Slider7 from "../image/main1.png";
import Slider8 from "../image/main1.png";

const ComWrapper=styled.div`
    width : 100%;
    height : 100vh;
    display:flex;
    flex-direction : column;
    padding-top:50px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content : center;
    gap : 3.25rem;
    margin-top : 0.75rem;
    margin-bottom:3.87rem;
`;

const LeftComponent=styled.div`
    display: flex;
    flex-direction : column;
`;

const Button = styled.button`
margin-top: 1.56rem;
width: 28rem;
height: 3.75rem;
flex-shrink: 0;
border-radius: 0.5rem;
background: var(--Primary-color, #BF92FB);

color: var(--White, #FFF);
text-align: center;

/* subtitle/subtitle_extrabold_16 */
font-family: NanumSquare;
font-size: 1rem;
font-style: normal;
font-weight: 800;
line-height: normal;
`;



function FaceMain(){

    const folder = sessionStorage.getItem("uuid"); // 폴더명
    const file = sessionStorage.getItem("fileName"); // 파일명
    const [responseFolder, setResponseFolder] = useState(null);
    const [responseVideo, setResponseVideo] = useState(null);

    //선택완료 버튼 눌렸을 때 이미지, 파일명, 동영상이름 보내줘야함(post)
    //"http://13.125.58.137:8080/video/flask-mosaic?folderName=test"
    //http://13.125.58.137:8080/video/flask-mosaic?folderName=${folder}
    const handleSubmit = () => {
        axios.post(`http://13.125.58.137:8080/video/flask-mosaic?folderName=test`, {
            "videoName": "cutVideo.mp4",
            "imageName": [
                "gongyoo2.jpg", "goognyoo.png", "img_1.png", "img_2.png", "img.png"
            ]
        })
        .then(response => {
            console.log('Response:', response.data);
            setResponseFolder(response.data.folderName);
            setResponseVideo(response.data.videoName);
            sessionStorage.setItem("mosicFolder", responseFolder);
            sessionStorage.setItem("mosicVideoName", responseVideo);
            // folderName: “”,
            // videoName:””
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    //slider 띄워줄 이미지
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

    return(
        <ComWrapper>
            <Header/>
            <Wrapper>
                <LeftComponent>
                    <Box></Box>
                    <Button onClick={handleSubmit}>선택 완료</Button>
                </LeftComponent>
                <VideoComponent/>
            </Wrapper>
            <SliderComponent urlData={urlData}/>
        </ComWrapper>
    );
}

export default FaceMain;