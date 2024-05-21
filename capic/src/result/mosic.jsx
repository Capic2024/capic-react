import styled from "styled-components";
import { useState,useEffect } from "react";
import AWS from 'aws-sdk';
import resVid from '../testimg/processed.mp4'

const MosicComponent = styled.div`
border: 1px solid var(--Gray3, #BFC4D8);
background: var(--White, #FFF);
width: 63.75rem;
height: 35.9375rem;
flex-shrink: 0;
`;

const VideoContainer = styled.video`
  width : 63.75rem; 
  height: 35.9375rem;
`

function Mosic(){

    //const uuid = sessionStorage.getItem('uuid');

    //const folderName = sessionStorage.getItem('mosicFolder');
    //const videoName = sessionStorage.getItem('mosicVideoName');

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
  const uuid = sessionStorage.getItem('uuid');
  const name = sessionStorage.getItem('fileName');

  useEffect(() => {
    const getVideo = async () => {
      //const filename = uuid+'/'+name;
      const filename = 'test3/'+name;

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
            <VideoContainer src={videoUrl} controls />
        </MosicComponent>
    );
}

export default Mosic;