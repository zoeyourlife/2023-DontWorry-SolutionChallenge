import { useRouter } from "next/router";
import ImageDetail from "src/components/ImageDetail";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import styled from "styled-components";

function Detail() {
  const route = useRouter();
  return (
    <>
      <Nav />
      <StyledDetail>
        <ImageDetail />
        <ImageDetail />
        <ImageDetail />
        <ImageDetail />
        <ImageDetail />
      </StyledDetail>
      <BottomNav selected="Images" />
    </>
  );
}

export default Detail;

const StyledDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
`;
