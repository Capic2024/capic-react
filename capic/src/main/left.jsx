import mainLogo from '../image/mainLogo.png'
import styled from 'styled-components';
import {motion} from 'framer-motion'
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Wrapper = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: center;
`;

const Comment  = styled.div`
color: var(--Gray8, #191B24);
font-family: NanumSquare;
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: 150%;
margin-bottom : 0.5rem;
`;

const Power = styled(motion.span)`
color: var(--Gray8, #BF92FB);
`;

const Logo = styled.img`
width: 23.75rem;
height: 7.375rem;
flex-shrink: 0;
margin-bottom : 3.12rem;
`;

const Button = styled.button`
color: var(--White, #FFF);
font-family: NanumSquare;
font-size: 1.5rem;
font-style: normal;
font-weight: 800;
line-height: normal;

width: 23.75rem;
height: 3.75rem;
flex-shrink: 0;
border-radius: 0.5rem;
background: var(--Gray8, #191B24);
`;

const FileInput = styled.input`
display : none;
`;


function Left(){
    const fileInputRef = useRef(null);
    const[loading, setLoading] = useState(false);
    const navigate = useNavigate();

    //s3관련
    const[progress, setProgress] = useState(0);

    const ACCESS_KEY=process.env.REACT_APP_accessKeyId;
    const SECRET_ACCESS_KEY=process.env.REACT_APP_secretAccessKey;
    const S3_BUCKET=process.env.REACT_APP_bucket;
    const REGION = process.env.REACT_APP_region;

    AWS.config.update({
        accessKeyId : ACCESS_KEY,
        secretAccessKey : SECRET_ACCESS_KEY,

    });
    const myBucket = new AWS.S3({
        prarms : {Bucket:S3_BUCKET},
        region: REGION,
    });

    const handleButtonClick=()=>{
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // 직접 파일 객체를 변수에 할당
        if (!file) {
            console.log("No file selected.");
            return;
        }
    
        setProgress(0);
        uploadFile(file); // uploadFile 함수에 file 객체를 직접 전달
        setLoading(true);
        navigate('/loading');
    }

    
    const uploadFile = (file) => {
        const uuid = uuidv4();
        sessionStorage.setItem('uuid', uuid);
        sessionStorage.setItem('fileName',file.name);
        
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: uuid+"/"+file.name
        };
    
        myBucket.putObject(params)
        .on('httpUploadProgress', (evt) => {
            const progress = Math.round((evt.loaded / evt.total) * 100);
            setProgress(progress); // 진행 상태 업데이트
            
            console.log("Upload Progress: ", progress + "%");
        }) 
        .send((err) => {
            if (err) console.log(err);
            else 
            {
                console.log("Upload success");
            
                axios.post(`http://localhost:8080/video/flask-target?folderName=${uuid}&videoName=${file.name}`, {
                })
                .then(response => {
                    console.log('Response:', response.data);
                    console.log('person : ', response.data.data.personSize);
                    sessionStorage.setItem('size', response.data.data.personSize);
                    navigate('/pick');
                    
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
        });

        
    }
    

    return(
        <>
            <Wrapper>
                <Comment>
                    내가 <Power initial={{ opacity: 0 }} animate={{ opacity: 1, scale: [1, 1.2, 1] }} transition={{ duration: 1 ,repeat: Infinity, repeatDelay: 3}} >선택</Power>한 얼굴을<br/>
                    <Power initial={{ opacity: 0 }} animate={{ opacity: 1, scale: [1, 1.2, 1] }} transition={{ duration: 1,repeat: Infinity, repeatDelay: 3 }}>자동으로</Power> 모자이크 영상 제작
                </Comment>
                <Logo src={mainLogo}/>
                <Button onClick={handleButtonClick}>시작하기</Button>
                <FileInput
                    type = "file"
                    ref = {fileInputRef}
                    onChange={handleFileChange}
                    accept="video/*"
                />
            </Wrapper>
        </>
    );
}

export default Left;