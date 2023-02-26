import Link from "next/link";
import styled from "styled-components";
import Nav from "src/components/Nav";
import Timeline from "src/components/Timeline";
import AddIcon from "@mui/icons-material/Add";
import BottomNav from "src/components/Nav/BottomNav";

function Main() {
  return (
    <>
      <Nav
        rightConfig={
          <Link href="/Main/Write">
            <AddIcon />
          </Link>
        }
      />
      <StyledWrapper>
        <Timeline />
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
