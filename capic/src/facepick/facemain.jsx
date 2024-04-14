import styled from "styled-components";
import Box from "./box";
import VideoComponent from './videocomponent';
import Header from "../header/header";
import SliderComponent from "./slider";
import Slider from "react-slick";
import axios from 'axios'

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

    //선택완료 버튼 눌렸을 때 이미지, 파일명, 동영상이름 보내줘야함(post)
    //"http://13.125.58.137:8080/video/falsk-mosaic?folderName=test"
    const handleSubmit = () => {
        axios.post(`http://13.125.58.137:8080/video/falsk-mosaic?folderName=${folder}`, {
            "videoName": "cutVideo.mp4",
            "imageName": [
                "gongyoo2.jpg", "goognyoo.png", "img_1.png", "img_2.png", "img.png"
            ]
        })
        .then(response => {
            console.log('Response:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

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
            <SliderComponent/>
        </ComWrapper>
    );
}

export default FaceMain;