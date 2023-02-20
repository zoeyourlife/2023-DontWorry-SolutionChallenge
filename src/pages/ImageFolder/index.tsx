import React from 'react';
import ImageFOL from 'src/components/ImageFOL';
import styled from 'styled-components';

function ImageFolder() {
    return (
        <StyledImageFolder>
            <ImageFOL />
            <ImageFOL />
            <ImageFOL />
            <ImageFOL />
        </StyledImageFolder>
    );
}

export default ImageFolder;

const StyledImageFolder = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
`;
