import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
    defaultFadeInLeftVariants,
    defaultFadeInUpVariants,
} from 'src/constants/motion';
interface IImageFOL {
    month: string;
    quantity: number;
}

function ImageFOL(props: IImageFOL) {
    const route = useRouter();
    return (
        <StyledImageFOL
            initial="initial"
            animate="animate"
            exit="exit"
            variants={defaultFadeInUpVariants}
            onClick={() => route.push('/')}
        >
            <StyledTestImage />
            <div>{props.month}</div>
            <div>{props.quantity}</div>
        </StyledImageFOL>
    );
}

export default ImageFOL;

const StyledImageFOL = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    padding: 10px;
`;
const StyledTestImage = styled.div`
    background-color: gray;
    border-radius: 10px;
    width: 100%;
    padding-bottom: 100%;
`;
