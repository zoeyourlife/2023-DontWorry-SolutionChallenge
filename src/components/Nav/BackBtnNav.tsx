import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";
import styled from "styled-components";

function BackBtnNav() {
  const router = useRouter();
  return (
    <StyledNavWrapper>
      <StyledBackBtn
        onClick={() => {
          router.back();
        }}
      ></StyledBackBtn>
    </StyledNavWrapper>
  );
}

export default BackBtnNav;

const StyledNavWrapper = styled.nav`
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.background};
  z-index: 10;
`;

const StyledBackBtn = styled(ArrowBackIosIcon)`
  cursor: pointer;
`;
