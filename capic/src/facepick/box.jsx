import styled from "styled-components";
import logo from '../image/graylogo.svg';

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

function Box(){
    return(
        <Wrapper>
            <Logo src={logo}/>
            <Comment>블러 처리하고 싶은<br/>얼굴을 선택해 주세요.</Comment>
        </Wrapper>
    );
}

export default Box;