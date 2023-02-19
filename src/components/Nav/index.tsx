import Link from "next/link";
import { ReactElement } from "react";
import styled from "styled-components";

interface INavProps {
  rightConfig?: ReactElement;
}

function Nav({ rightConfig }: INavProps) {
  return (
    <StyledNavWrapper>
      <Link href="/Main">
        <StyledLogo>DontWorry</StyledLogo>
      </Link>
      {rightConfig && <>{rightConfig}</>}
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
