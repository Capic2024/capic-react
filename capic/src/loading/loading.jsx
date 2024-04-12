import { useState, useEffect } from "react";
import {motion} from 'framer-motion';
import styled from "styled-components";
import loading from '../image/loading.png';

const Componentstyle = styled.div`
width : 100%;
height: 100vh;
display: flex;
justify-content : center;
align-itmes : center;
`

const Wrapper = styled.div`
display: flex;
flex-direction : column;
justify-content : center;
align-itmes : center;
gap : 2.5rem;
`

const Comment = styled.div`
color: var(--Gray3, #BFC4D8);
text-align: center;

/* head/head_bold_24 */
font-family: NanumSquare;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

function Loading(){

    const [ment, setMent] = useState("얼굴 추출중");
    const success = () => {setMent("모자이크 처리중");}; //로딩중 멘트 상태관리

    return(
        <Componentstyle>
            <Wrapper>
                <motion.img 
                    src={loading} 
                    style={{ width: '12.5rem', height: '12.5rem', flexShrink: 0}} 
                    animate={{rotate: 360}}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                />
                <Comment>{ment}</Comment>
            </Wrapper>
        </Componentstyle>
    );
}



export default Loading;