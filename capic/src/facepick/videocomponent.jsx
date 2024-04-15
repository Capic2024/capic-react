import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AWS from "aws-sdk";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoContainer = styled.video`
  width: 42.5rem;
  height: 23.9375rem;
  border: 1px solid var(--Gray3, #BFC4D8);
  background: var(--White, #FFF);
  margin-bottom: 1.56rem;
`;

const TimeLine = styled.div`
  width: 42.5rem;
  height: 3.75rem;
  border: 1px solid var(--Gray3, #BFC4D8);
  background: var(--White, #FFF);
`;

function VideoComponent() {
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
  const folderName = sessionStorage.getItem('mosicFolder'); //마지막 컴포넌트로 이동
  const videoName = sessionStorage.getItem('mosicVideoName'); //마지막 컴포넌트로 이동

  useEffect(() => {
    const getVideo = async () => {
      //const filename = uuid+'/'+name;
      const filename = folderName+"/"+videoName; //마지막 컴포넌트로 이동
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

  return (
    <Wrapper>
      <VideoContainer src={videoUrl} controls />
      <TimeLine />
    </Wrapper>
  );
}

export default VideoComponent;
