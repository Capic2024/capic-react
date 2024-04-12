import styled from "styled-components";
import logo from '../image/logo2.jpg'

const Wrapper=styled.div`
    width : 100%;
    height: 6.25rem;
    display:flex;
    justify-content : center;
    align-items : flex-end;
    padding-top : 2.5rem;
`;

const HeaderComponent=styled.div`
    width : 73.75rem;
    display: flex;
    flex-direction: column;
    justify-content : flex-start;
`;

const Logo=styled.img`
width: 12.5rem;
height: 3.75rem;
flex-shrink: 0;
margin-bottom:1rem;
margin-top:5rem;
`;

const Title = styled.div`
color: var(--Gray8, #191B24);

/* head/head_bold_24 */
font-family: NanumSquare;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-top:10px;
`;

function Header(){
    return(
    <Wrapper>
        <HeaderComponent>
            <Logo src={logo}></Logo>
            <Title>내가 선택한 얼굴</Title>
        </HeaderComponent>
    </Wrapper>
    );
}

export default Header;