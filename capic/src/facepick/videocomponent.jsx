import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AWS from "aws-sdk";
import prev from '../testimg/prev.mp4';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoContainer = styled.video`
  width: 42.5rem;
  height: 29.2375rem;
  border: 1px solid var(--Gray3, #BFC4D8);
  background: var(--White, #FFF);
  margin-bottom: 1.56rem;
  display: flex;
  align-items : center;
`;

function VideoComponent() {
  const [videoUrl, setVideoUrl] = useState(prev);


  // const ACCESS_KEY=process.env.REACT_APP_accessKeyId;
  // const SECRET_ACCESS_KEY=process.env.REACT_APP_secretAccessKey;
  // const S3_BUCKET=process.env.REACT_APP_bucket;
  // const REGION = process.env.REACT_APP_region;


  // AWS.config.update({
  //   region: REGION,
  //   accessKeyId: ACCESS_KEY,
  //   secretAccessKey: SECRET_ACCESS_KEY,
  // });

  // const s3 = new AWS.S3();
  // const uuid = sessionStorage.getItem('uuid');
  // const name = sessionStorage.getItem('fileName');

  // useEffect(() => {
  //   const getVideo = async () => {
  //     //const filename = uuid+'/'+name;
  //     const filename = 'test3/cutVideo.mp4';
      
  //     try {
  //       const data = await s3.getObject({
  //         Bucket: S3_BUCKET,
  //         Key: filename,
  //       }).promise();

  //       const blob = new Blob([data.Body], { type: "video/mp4" });
  //       const url = URL.createObjectURL(blob);
  //       //setVideoUrl(url);
  //     } catch (error) {
  //       console.error('Error fetching video from S3:', error);
  //       setVideoUrl('');
  //     }
  //   };

  //   getVideo();
  // }, []);
  

  return (
    <Wrapper>
      <VideoContainer src={videoUrl} controls />
    </Wrapper>
  );
}

export default VideoComponent;
