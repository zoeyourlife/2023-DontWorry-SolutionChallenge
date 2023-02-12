import Link from "next/link";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

function Nav() {
  return (
    <StyledNavWrapper>
      <Link href="/Main">
        <StyledLogo>DontWorry</StyledLogo>
      </Link>
      <Link href="/Main/Write">
        <StyledWritePageBtn />
      </Link>
    </StyledNavWrapper>
  );
}

export default Nav;

const StyledNavWrapper = styled.nav`
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1rem;
`;

const StyledLogo = styled.h1`
  cursor: pointer;
`;

const StyledWritePageBtn = styled(AddIcon)`
  cursor: pointer;
`;
