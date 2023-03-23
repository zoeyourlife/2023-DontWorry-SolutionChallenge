import construction from "src/assets/lottieJSON/construction.json";
import LottieWrapper from "src/components/Common/Lottie";
import Nav from "src/components/Nav";
import styled from "styled-components";

function Case() {
  return (
    <>
      <Nav />
      <StyledCase>
        <LottieWrapper lottieData={construction} />
        <h1>SORRY</h1>
        <h2>Case page is under construction</h2>
      </StyledCase>
    </>
  );
}

export default Case;

const StyledCase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  gap: 1rem;
`;
