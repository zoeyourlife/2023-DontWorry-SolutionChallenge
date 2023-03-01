import CloseIcon from "@mui/icons-material/Close";
import { m } from "framer-motion";
import React, { useState } from "react";
import {
  defaultFadeInVariants,
  defaultFadeInScaleVariants,
} from "src/constants/motion";
import styled from "styled-components";

interface IModal {
  isOpen: boolean;
  title: string;
  content: string;
}

function Modal({ isOpen, content, title }: IModal) {
  const [isOpenState, setIsOpenState] = useState<boolean>(isOpen);

  return (
    <StyledModal
      isOpen={isOpenState}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={defaultFadeInVariants}
      onClick={() => {
        setIsOpenState(false);
      }}
    >
      <StyledModalMain
        initial="initial"
        animate="animate"
        exit="exit"
        variants={defaultFadeInScaleVariants}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CloseIcon className="close" onClick={() => setIsOpenState(false)} />
        <h1>{title}</h1>
        <p>{content}</p>
      </StyledModalMain>
    </StyledModal>
  );
}

export default Modal;

const StyledModal = styled(m.div)<{ isOpen: boolean }>`
  background-color: rgba(255, 255, 255, 0.2);
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;
const StyledModalMain = styled(m.div)`
  width: 20rem;
  height: fit-content;
  background-color: black;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.imgCard};
  display: flex;
  flex-direction: column;
  gap: 0.6125rem;
  .close {
    align-self: flex-end;
    cursor: pointer;
  }
  h1 {
    align-self: center;
  }
  z-index: 10001;
`;
