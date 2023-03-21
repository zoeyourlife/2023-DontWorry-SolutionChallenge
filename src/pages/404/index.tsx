import React from "react";
import Lottie from "react-lottie";
import lottie404 from "src/assets/lottieJSON/404.json";
import LottieWrapper from "src/components/Common/Lottie";
import Nav from "src/components/Nav";
import styled from "styled-components";

function custom404() {
  return (
    <>
      <Nav />
      <StyledCustom404>
        <LottieWrapper lottieData={lottie404} />
        <div>
          <h1>NOT FOUND</h1>
          <h3>That page can&apos;t be found</h3>
        </div>
      </StyledCustom404>
    </>
  );
}

const StyledCustom404 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  gap: 20%;
  div {
    display: flex;
    flex-direction: column;
  }
`;

export default custom404;
