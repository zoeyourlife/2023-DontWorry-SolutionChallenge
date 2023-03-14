import Link from "next/link";
import { useState } from "react";
import styled, { css } from "styled-components";

function HamburgerNav() {
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => setClick(!click);

  return (
    <StyledMenuLabel onClick={handleClick}>
      <StyledMenu click={click}></StyledMenu>
      <StyledBg click={click}></StyledBg>
      <StyledNavWrapper click={click} onClick={handleClick}>
        <StyledList>
          <StyledListItem>
            <Link href="/">About</Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/DontWorry/Case">Case</Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/DontWorry/Help">Help</Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/DontWorry/Law">Law</Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/Signin">Login</Link>
          </StyledListItem>
        </StyledList>
      </StyledNavWrapper>
    </StyledMenuLabel>
  );
}

export default HamburgerNav;

const StyledMenuLabel = styled.label`
  float: right;
  text-align: center;
  cursor: pointer;
`;

const StyledMenu = styled.span<{ click: boolean }>`
  position: relative;
  display: inline-block;
  width: 1.8rem;
  height: 0.15rem;

  background-color: ${(props) =>
    props.click
      ? css`
          ${({ theme }) => theme.color.background};
        `
      : css`
          ${({ theme }) => theme.color.white};
        `};

  transition: all 0.5s;
  &::before,
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    left: 0;
    background-color: ${({ theme }) => theme.color.white};
    width: 1.8rem;
    height: 0.15rem;
    transition: all 0.5s;
  }
  &::before {
    top: ${(props) => (props.click ? "0" : "-0.75rem")};
    transform: ${(props) => (props.click ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.click ? "0" : "0.75rem")};
    transform: ${(props) => (props.click ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const StyledBg = styled.div<{ click: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.8;
  ${(props) =>
    props.click &&
    css`
      height: 100vh;
      background-color: ${({ theme }) => theme.color.background};
    `};
  transition: transform 0.8s;
`;

const StyledNavWrapper = styled.div<{ click: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  opacity: ${(props) => (props.click ? "1" : "0")};
  width: ${(props) => (props.click ? "100%" : "0")};
  transition: width 0.9s;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const StyledListItem = styled.li`
  display: inline-block;

  font-size: 1.65rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 0.2px;

  margin: 2.4rem 0rem;
  transition: transform 0.8s;
  &:hover {
    transform: translateY(-0.75rem);
  }
`;
