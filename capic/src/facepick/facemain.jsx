import styled from "styled-components";
import Box from "./box";
import VideoComponent from './videocomponent';
import Header from "../header/header";
import SliderComponent from "./slider";
import Slider from "react-slick";
import axios from 'axios'
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Slider0 from "../testimg/gongyoo2.jpg";
import Slider1 from "../testimg/goognyoo.png";
import Slider2 from "../testimg/img_1.png";
import Slider3 from "../testimg/img_2.png";
import Slider4 from "../testimg/img.png";
import Slider5 from "../testimg/hwan.png";
import Slider6 from "../testimg/seho.png";
import Slider7 from "../testimg/yoo1.png";
import Slider8 from "../image/main1.png";
import { Link } from "react-router-dom";
import Recoil from 'recoil';
import {imgListState, pickListState} from '../recoil';
import { useRecoilState } from "recoil";



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

    const [imgList, setImgList] = useRecoilState(imgListState);
    const [pickList, setPickList] = useRecoilState(pickListState);

    const folder = sessionStorage.getItem("uuid"); // 폴더명
    const file = sessionStorage.getItem("fileName"); // 파일명

    const [responseFolder, setResponseFolder] = useState(null);
    const [responseVideo, setResponseVideo] = useState(null);

    //선택완료 클릭시비디오이름, 이미지 폴더이름 보내기(post)
    //"https://capic.co.kr/video/flask-mosaic?folderName=test"
    //https://capic.co.kr/video/flask-mosaic?folderName=${folder
    const handleSubmit = () => {
        axios.post(`http://localhost:8080/video/flask-mosaic?folderName=test`, {
            "imageName" :["person1","person2","person3"],
            "videoName":"cutVideo.mp4"
        })
        .then(response => {
            console.log('Response:', response.data);
            setResponseFolder(response.data.folderName); //server에서 받아온 비디오 폴더명 지정
            setResponseVideo(response.data.videoName); //비디오 파일명 지정
            //setResponseVideo(response.data.data);
            //console.log("video name : "+responseVideo);
            console.log("test : "+response.data.data);
            sessionStorage.setItem("mosicFolder", responseFolder); //폴더명 지정
            sessionStorage.setItem("mosicVideoName", response.data.data); //비디오명 지정
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    //slider 띄워줄 이미지
    const urlData = [
        //Slider0,
        //Slider1,
        //Slider2,
        //Slider3,
        //Slider4,
        Slider5,
        Slider6,
        Slider7,
        //Slider8
    ];
    
    useEffect(()=>{
        setImgList([Slider0, Slider1, Slider2, Slider3, Slider4, Slider5, Slider6, Slider7, Slider8]);
    },[])

    
    // const mappedData = urlData.map((item, index) => ({ [index]: item })); //mapping
    // console.log(mappedData);


    //const [isActive, setIsActive] = useState(false);

    // const toggleClass = () => {
    //     setIsActive(!isActive); 
    //     //onSelectImage(url.index); 
    //     console.log("url : "+url)
    // };

    return(
        <ComWrapper>
            <Header/>
            <Wrapper>
                <LeftComponent>
                <Box urlData={urlData}/>
                    {/* <Box/> */}
                    <Link to="/mosicloading"><Button onClick={handleSubmit}>선택 완료</Button></Link>
                </LeftComponent>
                <VideoComponent/>
            </Wrapper>
            <SliderComponent urlData={urlData}/>
        </ComWrapper>
    );
}

export default FaceMain;