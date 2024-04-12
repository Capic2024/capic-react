import img1 from '../image/main1.png'
import img2 from '../image/main2.png'
import img3 from '../image/main3.png'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const ComponentStyle=styled.div`
height : 100vh;
display: flex;
justify-content : center;
align-items : center;
`;

const Wrapper=styled.div`
width: 45rem;
flex-shrink: 0;
position : relative;
height: 27.625rem;
`;

function ImageContainer(){
    return(
    <ComponentStyle>
    <Wrapper>
    <motion.img 
        src={img1}
        style={{
            width: '13.3125rem',
            height:'22.4375rem',
            flexShrink: '0',
            position: 'absolute',
            left: '0',
            bottom : '0'
        }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,repeat: Infinity, repeatDelay: 3 }}
    />

    <motion.img 
        src={img2}
        style={{
            width: '11.5625rem',
            height: '17.6875rem',
            flexShrink: '0',
            position : 'absolute',
            left: '13.6rem',
            top : '0',
        }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,repeat: Infinity, repeatDelay: 3 }}
    />

    <motion.img 
        src={img3}
        style={{
            width: '19.3125rem',
            height: '17.5625rem',
            flexShrink: '0',
            position : 'absolute',
            right: '0',
            top: '20%'
        }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,repeat: Infinity, repeatDelay: 3 }}
    />
    </Wrapper>
    </ComponentStyle>
    );
}

export default ImageContainer;