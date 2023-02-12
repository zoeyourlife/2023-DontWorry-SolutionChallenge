import Nav from "src/components/Nav";
import Timeline from "src/components/Timeline";
import styled from "styled-components";

function Main() {
  return (
    <>
      <Nav />
      <StyledWrapper>
        <Timeline />
      </StyledWrapper>
    </>
  );
}

export default Main;

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 1rem;
`;
