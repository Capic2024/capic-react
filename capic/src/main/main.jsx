import Left from "./left";
import ImageContainer from "./image";
import styled from "styled-components";

const Componentstyle=styled.div`

height: 100vh;
display: flex;
justify-content : center;
align-itmes : center;`

const Wrapper = styled.div`
    display: flex;
    justify-content : center;
    gap : 5.5rem;
    align-itmes : center;
    height: 100vh;
    width : 100%;
`;



function Main(){
 return(
        <Wrapper>
            <Left/>
            <ImageContainer/>
        </Wrapper>
 );
}

export default Main;