import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ImageDetail from 'src/components/ImageDetail';
import BottomNav from 'src/components/Nav/BottomNav';
import Nav from 'src/components/Nav';

function Detail() {
    const route = useRouter();
    return (
        <>
            <Nav />
            <StyledDetail>
                <ImageDetail />
                <ImageDetail />
                <ImageDetail />
                <ImageDetail />
                <ImageDetail />
            </StyledDetail>
            <BottomNav selected="Images" />
        </>
    );
}

export default Detail;

const StyledDetail = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
`;
