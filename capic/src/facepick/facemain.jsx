import styled from "styled-components";
import Box from "./box";
import VideoComponent from './videocomponent';
import Header from "../header/header";
import SliderComponent from "./slider";
import Slider from "react-slick";
import axios from 'axios'
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {imgListState, pickListState} from '../recoil';
import { useRecoilState } from "recoil";
import AWS from 'aws-sdk';



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

    //const size = parseInt(sessionStorage.getItem('size'));
    const size=5;

    const [imgList, setImgList] = useRecoilState(imgListState);
    const [pickList, setPickList] = useRecoilState(pickListState);
    const [sendList, setSendList] = useState([]);

    const folder = sessionStorage.getItem("uuid"); // 폴더명
    const file = sessionStorage.getItem("fileName"); // 파일명

    const [responseFolder, setResponseFolder] = useState(null);
    const [responseVideo, setResponseVideo] = useState(null);

    //선택완료 클릭시비디오이름, 이미지 폴더이름 보내기(post)
    //"https://capic.co.kr/video/flask-mosaic?folderName=test"
    //https://capic.co.kr/video/flask-mosaic?folderName=${folder}

    useEffect(() => {
        const newSendList = pickList.map(index => {
            return `person${index + 1}`;
        });
        setSendList(newSendList);
    }, [pickList]);

    const handleSubmit = () => {        
        //console.log("sendList : "+sendList);
        
        axios.post(`http://localhost:8080/video/flask-mosaic?folderName=test`, {
            "imageName" :sendList,
            //"imageName" :["person1","person2","person3"],
            //"videoName":file
            "videoName" : "cutVideo.mp4"
        })
        .then(response => {
            //페이지 렌더링
            //if(response.data.data.code == "1000"){useNavigate('/result');}
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

    
    const ACCESS_KEY=process.env.REACT_APP_accessKeyId;
    const SECRET_ACCESS_KEY=process.env.REACT_APP_secretAccessKey;
    const S3_BUCKET=process.env.REACT_APP_bucket;
    const REGION = process.env.REACT_APP_region;

    //s3이미지 가져오기

    useEffect(() => {

        AWS.config.update({
            accessKeyId: ACCESS_KEY,
            secretAccessKey: SECRET_ACCESS_KEY,
            region: REGION
        });

        const s3 = new AWS.S3();
    
        if (size > 0) {
            const bucketName = S3_BUCKET;
            const folderName = `${folder}/`;
    
            const promises = [];
            for (let i = 1; i <= size; i++) {
                const params = {
                    Bucket: bucketName,
                    Key: `test/person${i}/1.jpeg`
                    //Key: `${folderName}person${i}/1.jpeg`
                };
    
                const promise = s3.getObject(params).promise().then(data => {
                    const blob = new Blob([data.Body], { type: data.ContentType });
                    return URL.createObjectURL(blob);
                }).catch(err => {
                    console.error(`Error fetching image person${i}/1.jpeg:`, err);
                    return '';
                });
                promises.push(promise);
            }
    
            Promise.all(promises).then(urls => {
                const validUrls = urls.filter(url => url !== '');
                setImgList(validUrls);
            });
        }
    }, []);


    return(
        <ComWrapper>
            <Header/>
            <Wrapper>
                <LeftComponent>
                <Box/>
                    <Link to="/mosicloading"><Button onClick={handleSubmit}>선택 완료</Button></Link>
                </LeftComponent>
                <VideoComponent/>
            </Wrapper>
            <SliderComponent urlData={imgList}/>
        </ComWrapper>
    );
}

export default FaceMain;