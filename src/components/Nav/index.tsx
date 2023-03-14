import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { useRouter } from "next/router";
import HamburgerNav from "src/components/Nav/Hamburger";
import styled from "styled-components";

function Nav() {
  const router = useRouter();

  return (
    <StyledNavWrapper>
      <StyledBackBtn
        onClick={() => {
          router.back();
        }}
      ></StyledBackBtn>
      <Link href="/">
        <StyledLogo>DontWorry</StyledLogo>
      </Link>
      <HamburgerNav />
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

  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.background};
  z-index: 10;
`;

const StyledLogo = styled.h1`
  cursor: pointer;
`;

const StyledBackBtn = styled(ArrowBackIosIcon)`
  cursor: pointer;
`;
