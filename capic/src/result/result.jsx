import axios from 'axios'
import styled from "styled-components";
import logo from '../image/logo2.jpg'
import Mosic from '../result/mosic';
import Timeline from '../result/timeline';
import filedown from '../image/FilePlus.svg';
import down from '../image/Download.svg';
import AWS from 'aws-sdk';


const Wrapper=styled.div`
    width : 100%;
    display:flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

const HeaderComponent=styled.div`
    width : 73.75rem;
    display: flex;
    flex-direction: column;
    justify-content : flex-start;
    margin-bottom: 5.75rem;
`;

const Logo=styled.img`
    width: 200px;
    height: 60px;
    flex-shrink: 0;
    margin-top:2.2rem;
`;

const ButtonContainer = styled.div`
    display : flex;
    justify-content : flex-end;
    align-itmes : flex-end;
    width: 63.75rem;
    margin-top : 3.75rem;
`;

const FilePlus = styled.button`
    border-radius: 0.5rem;
    background: var(--Primary-color, #BF92FB);
    display: flex;
    width: 12.5rem;
    padding: 0.875rem 1.625rem;
    align-items: center;
    gap: 0.25rem;
    FilePlus:hover, FilePlus:hover > * {
        cursor: pointer;
    }
`;

const Download = styled.button`
    display: flex;
    width: 12.5rem;
    height: 3.75rem;
    padding: 0rem 3.125rem;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    background: var(--Gray8, #191B24);
    margin-left : 1.5rem;
`;

const Font = styled.div`
    color: White;
    text-align: center;
    /* subtitle/subtitle_extrabold_16 */
    font-family: NanumSquare;
    font-size: 1rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`

function Result() {
    AWS.config.update({
        region: process.env.REACT_APP_region,
        credentials: new AWS.Credentials(process.env.REACT_APP_accessKeyId, process.env.REACT_APP_secretAccessKey)
    });

    const s3 = new AWS.S3();

    async function deleteFolderContents(bucketName, folderPrefix) {
        try {
            // 폴더 내의 객체 목록 조회
            const listParams = {
                Bucket: bucketName,
                Prefix: folderPrefix
            };

            
            const listedObjects = await s3.listObjectsV2(listParams).promise();

            if (listedObjects.Contents.length > 0) {
                const deleteParams = {
                    Bucket: bucketName,
                    Delete: {
                        Objects: listedObjects.Contents.map(({ Key }) => ({ Key })),
                    }
                };
                console.log("Deleting the following objects:", deleteParams.Delete.Objects);
                const response = await s3.deleteObjects(deleteParams).promise();
                console.log("Delete response:", response);
                if (listedObjects.IsTruncated) {
                    await deleteFolderContents(bucketName, folderPrefix);
                }
            } else {
                console.log("No objects to delete in the specified folder.");
            }

        } catch (err) {
            console.error("Error in deleting folder contents:", err);
        }
    }

    const handleDelete = async () => {
        const bucketName = process.env.REACT_APP_bucket;
        const folderPrefix = sessionStorage.getItem("uuid") + "/";
        console.log("버킷명 : "+bucketName);
        console.log("폴더명 : "+folderPrefix);
        await deleteFolderContents(bucketName, folderPrefix);
        console.log('Folder contents deleted successfully');
    };

    
    return (
        <>
            <Wrapper>
                <HeaderComponent>
                    <Logo src={logo}></Logo>
                </HeaderComponent>
                <Mosic/>
                <Timeline/>
                <ButtonContainer>
                    <FilePlus onClick={handleDelete}>
                        <img src={filedown}/>
                        <Font>다른 영상 만들기</Font>
                    </FilePlus>
                    
                    <Download onClick={handleDelete}>
                        <img src={down}/>
                        <Font>다운로드</Font>
                    </Download>
                </ButtonContainer>
            </Wrapper>
        </>
    );
}

export default Result;