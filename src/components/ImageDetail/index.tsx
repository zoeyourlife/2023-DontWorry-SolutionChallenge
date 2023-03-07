import { motion } from "framer-motion";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import React from "react";
import {
  defaultFadeInLeftVariants,
  defaultFadeInUpVariants,
} from "src/constants/motion";
import styled from "styled-components";

function ImageDetail() {
  return (
    <StyledImageDetail
      initial="initial"
      animate="animate"
      exit="exit"
      variants={defaultFadeInUpVariants}
    >
      <StyledTestImage />
    </StyledImageDetail>
  );
}

export default ImageDetail;

const StyledImageDetail = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 0.125rem;
`;
const StyledTestImage = styled.div`
  background-color: gray;
  width: 100%;
  padding-bottom: 100%;
`;
