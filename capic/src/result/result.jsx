import axios from 'axios'
import styled from "styled-components";
import logo from '../image/logo2.jpg'
import Mosic from '../result/mosic';
import Timeline from '../result/timeline';
import filedown from '../image/FilePlus.svg';
import down from '../image/Download.svg';



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

const FilePlus = styled.div`
border-radius: 0.5rem;
    background: var(--Primary-color, #BF92FB);
    display: flex;
    width: 12.5rem;
    padding: 0.875rem 1.625rem;
    align-items: center;
    gap: 0.25rem;

`;

const Download = styled.div`
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

function Result(){
    return(
        <>
        <Wrapper>
            <HeaderComponent>
                <Logo src={logo}></Logo>
            </HeaderComponent>
            <Mosic/>
            <Timeline/>
            <ButtonContainer>
                <FilePlus>
                    <img src={filedown}/>
                    <Font>다른 영상 만들기</Font>
                </FilePlus>
                    
                <Download>
                    <img src={down}/>
                    <Font>다운로드</Font>
                </Download>
            </ButtonContainer>
        </Wrapper>
    </>
    );

}

export default Result;