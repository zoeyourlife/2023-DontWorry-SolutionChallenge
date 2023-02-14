import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';

interface IProps {
    selected: 'Images' | 'Home' | 'DontWorry';
}
// * param: selected = "Image" or "Home" or "DontWorry"

function BottomNav({ selected }: IProps) {
    return (
        <StyledBottomNavWrapper>
            <Link href="/ImageFolder">
                <StyledBtnWrapper>
                    <StyledImageFolderPageBtn color={selected}>
                        <PhotoLibraryIcon />
                        <p>Images</p>
                    </StyledImageFolderPageBtn>
                </StyledBtnWrapper>
            </Link>
            <Link href="/Main">
                <StyledBtnWrapper>
                    <StyledHomePageBtn color={selected}>
                        <HomeIcon />
                        <p>Home</p>
                    </StyledHomePageBtn>
                </StyledBtnWrapper>
            </Link>
            <Link href="/DontWorry">
                <StyledBtnWrapper>
                    <StyledDontWorryPageBtn color={selected}>
                        <EscalatorWarningIcon />
                        <p>DontWorry</p>
                    </StyledDontWorryPageBtn>
                </StyledBtnWrapper>
            </Link>
        </StyledBottomNavWrapper>
    );
}

export default BottomNav;

const StyledBottomNavWrapper = styled.nav`
    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    max-width: 30rem;
    width: 100%;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.color.grey};
    z-index: 10;
`;

const StyledBtnWrapper = styled.div`
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            font-weight: ${({ theme }) => theme.fontWeight.bold};
        }
    }
    cursor: pointer;
    width: 4.625rem;
`;
const StyledHomePageBtn = styled.div`
    color: ${({ color, theme }) =>
        color === 'Home' ? theme.color.white : theme.color.grey100};
`;

const StyledImageFolderPageBtn = styled.div`
    color: ${({ color, theme }) =>
        color === 'Images' ? theme.color.white : theme.color.grey100};
`;
const StyledDontWorryPageBtn = styled.div`
    color: ${({ color, theme }) =>
        color === 'DontWorry' ? theme.color.white : theme.color.grey100};
`;
