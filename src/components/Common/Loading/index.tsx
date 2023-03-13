import bgLottie from "src/assets/lottieJSON/loading.json";
import LottieWrapper from "src/components/Common/Lottie";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import styled from "styled-components";

function Loading() {
  return (
    <>
      <Nav />
      <StyledWrapper>
        <LottieWrapper lottieData={bgLottie} />
      </StyledWrapper>
      <BottomNav />
    </>
  );
}

export default Loading;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 3rem;
`;
