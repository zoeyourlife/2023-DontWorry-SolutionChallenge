import CreateIcon from "@mui/icons-material/Create";
import HomeIcon from "@mui/icons-material/Home";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import Link from "next/link";
import { useState } from "react";
import useScroll from "src/hooks/useScroll";
import Modal from "../Modal";
import styled, { css } from "styled-components";

interface IProps {
  selected?: "Images" | "Home" | "Write";
}
// * param: selected = "Image" or "Home" or "DontWorry"

function BottomNav({ selected }: IProps) {
  const { scrollDown, scrollTop } = useScroll();
  const [showModal, setShowModal] = useState(false);

  function onClickImageFolderPageBtn() {
    setShowModal(!showModal);
    console.log(showModal);
  }

  return (
    <>
      {showModal && (
        <Modal
          isOpen={showModal}
          title="Would you like to see what you wrote image?"
          content="In the meantime, you can see what you wrote image. Are you ready?"
          path="/ImageFolder"
        />
      )}
      <StyledBottomNavWrapper hide={scrollDown && !scrollTop}>
        <StyledBtnWrapper onClick={onClickImageFolderPageBtn}>
          <StyledImageFolderPageBtn color={selected}>
            <PhotoLibraryIcon />
            <p>Images</p>
          </StyledImageFolderPageBtn>
        </StyledBtnWrapper>

        <Link href="/Main">
          <StyledBtnWrapper>
            <StyledHomePageBtn color={selected}>
              <HomeIcon />
              <p>Home</p>
            </StyledHomePageBtn>
          </StyledBtnWrapper>
        </Link>
        <Link href="/Main/Write">
          <StyledBtnWrapper>
            <StyledDontWorryPageBtn color={selected}>
              <CreateIcon />
              <p>Write</p>
            </StyledDontWorryPageBtn>
          </StyledBtnWrapper>
        </Link>
      </StyledBottomNavWrapper>
    </>
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
  z-index: 3;

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
    color === "Home" ? theme.color.white : theme.color.grey100};
`;

const StyledImageFolderPageBtn = styled.div`
  color: ${({ color, theme }) =>
    color === "Images" ? theme.color.white : theme.color.grey100};
`;

const StyledDontWorryPageBtn = styled.div`
  color: ${({ color, theme }) =>
    color === "Write" ? theme.color.white : theme.color.grey100};
`;
