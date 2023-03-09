import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import Timeline from "src/components/Timeline";
import styled from "styled-components";

function Main() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <Nav />
      <StyledBtn
        onClick={() => {
          setIsOpen((e) => !e);
        }}
      >
        <DeleteIcon />
        <StyledTrashText>Trash</StyledTrashText>
      </StyledBtn>
      <StyledWrapper>
        <div onClick={() => toggle()}>{isOpen && <Timeline />}</div>
      </StyledWrapper>
      <BottomNav selected="Home" />
    </>
  );
}

export default Main;

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 1rem;
`;

const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.color.grey100};
  :hover {
    transition: all 0.3s;
    color: #ffffffd2;
  }
`;

const StyledTrashText = styled.span`
  margin-left: 0.1rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
