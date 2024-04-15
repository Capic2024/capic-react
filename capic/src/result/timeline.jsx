import styled from "styled-components";

const Time = styled.div`
width: 63.75rem;
height: 5.6875rem;
flex-shrink: 0;
border: 1px solid var(--Gray3, #BFC4D8);
background: var(--White, #FFF);
margin-top : 1.19rem;
`

function Timeline(){
    return(
    <Time/>);
}

export default Timeline;