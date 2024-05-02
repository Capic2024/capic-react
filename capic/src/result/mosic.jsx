import styled from "styled-components";
import { useState,useEffect } from "react";
import AWS from 'aws-sdk';
import resVid from '../testimg/res.mp4'

const MosicComponent = styled.div`
border: 1px solid var(--Gray3, #BFC4D8);
background: var(--White, #FFF);
width: 63.75rem;
height: 35.9375rem;
flex-shrink: 0;
`;

function Mosic(){

    const [videoUrl, setVideoUrl] = useState('');


    const ACCESS_KEY=process.env.REACT_APP_accessKeyId;
    const SECRET_ACCESS_KEY=process.env.REACT_APP_secretAccessKey;
    const S3_BUCKET=process.env.REACT_APP_bucket;
    const REGION = process.env.REACT_APP_region;
  
  
    AWS.config.update({
      region: REGION,
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY,
    });
  
    const s3 = new AWS.S3();
    //const uuid = sessionStorage.getItem('uuid');
    const uuid = "5241b068-98a7-4fc0-84ec-9cee214a0d7f"
    //const name = sessionStorage.getItem('fileName');
    const name = "processed_cutVideo2.mp4"
    //const folderName = sessionStorage.getItem('mosicFolder');
    //const videoName = sessionStorage.getItem('mosicVideoName');

    useEffect(() => {
        const getVideo = async () => {
          const filename = uuid+'/'+name;
          //const filename = folderName+"/"+videoName;
          console.log("filename : "+filename);
    
          try {
            const data = await s3.getObject({
              Bucket: S3_BUCKET,
              Key: filename,
            }).promise();
    
            const blob = new Blob([data.Body], { type: "video/mp4" });
            const url = URL.createObjectURL(blob);
            setVideoUrl(url);
          } catch (error) {
            console.error('Error fetching video from S3:', error);
            setVideoUrl('');
          }
        };
    
        getVideo();
      }, []);

    return(
        <MosicComponent>
            <video src={resVid} controls style={{width : "63.75rem", height: "35.9375rem"}}/>
        </MosicComponent>
    );
}

export default Mosic;