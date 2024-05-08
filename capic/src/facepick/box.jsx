import styled from "styled-components";
import logo from '../image/graylogo.svg';
import xcircle from '../image/grayxcircle.svg';
import { useRecoilValue, useRecoilState } from 'recoil';
import { imgListState, pickListState } from '../recoil';
import { useEffect } from "react";

const Wrapper = styled.div`
width: 448px;
height: 23.9375rem;
flex-shrink: 0;
border-radius: 8px;
border: 2px dashed var(--Gray3, #BFC4D8);
background: var(--Gray1, #F3F5FF);

display:flex;
flex-direction : column;
gap : 1.45rem;
align-items : center;
justify-content : center;
`

const Logo = styled.img`
width: 12.5rem;
height: 3.36188rem;
flex-shrink: 0;
`

const Comment = styled.div`
color: var(--Gray3, #BFC4D8);
text-align: center;
font-family: NanumSquare;
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: 170%; /* 1.7rem */

`
const PickWrapper = styled.div`
    width : 448px;
    height: 23.9375rem;
    flex-shrink: 0;

    display: grid;
    grid-template-rows:  repeat(3,6.25rem); 
    grid-template-columns: repeat(4,1fr); 
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
    padding-top:1.5rem;
`

const gridStyle={
    borderRadius:"0.5rem",
    width: "6.25rem",
    height:"6.25rem",
    position : "relative",
    cursor : "pointer"
}

const XCircle = styled.img`
  position: absolute;
  top: -12px;
  right: -14px;
  width: 2rem;
  height: 2rem;
  z-index: 1;
  cursor: pointer;
`;

const ImgCon = styled.img`
    width: 6.25rem;
    height:6.25rem;
    border-Radius: 0.5rem;
`

function Box() {
    const imgs = useRecoilValue(imgListState);
    const [pickList, setPickList] = useRecoilState(pickListState);

    // useEffect(() => {
        // console.log("pickList updated:", pickList);
    // }, [pickList]);
    
    return (
        <>
            {pickList.length === 0 ? (
                <Wrapper>
                    <Logo src={logo} />
                    <Comment>블러 처리 제외할<br/>얼굴을 선택해 주세요.</Comment>
                </Wrapper>
            ) : (
                <PickWrapper>
                    {imgs.map((url, originalIndex) => (
                        pickList.includes(originalIndex) && (
                            <div key={originalIndex} style={gridStyle} onClick={() => {
                                console.log("original index: " + originalIndex);
                                const updatedPickList = pickList.filter(item => item !== originalIndex);
                                setPickList(updatedPickList);
                            }}>
                                <ImgCon src={url} />
                                <XCircle src={xcircle} />
                            </div>
                        )
                    ))}
                </PickWrapper>
            )}
        </>
    );
}

export default Box;





