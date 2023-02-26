import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import useScroll from 'src/hooks/useScroll';
import HomeIcon from '@mui/icons-material/Home';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';

interface IProps {
    selected?: 'Images' | 'Home' | 'DontWorry';
}
// * param: selected = "Image" or "Home" or "DontWorry"

function BottomNav({ selected }: IProps) {
    const { scrollDown, scrollTop } = useScroll();

    return (
        <StyledBottomNavWrapper hide={scrollDown && !scrollTop}>
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

const StyledBottomNavWrapper = styled.nav<{ hide: boolean }>`
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

    ${(props) =>
        props.hide
            ? css`
                  transform: translateY(100%);
                  transition: all 0.65s;
              `
            : css`
                  transform: translateY(0%);
                  transition: all 0.4s;
              `}
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
