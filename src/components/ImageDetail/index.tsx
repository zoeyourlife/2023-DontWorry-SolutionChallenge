import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import React from "react";
import {
  defaultFadeInLeftVariants,
  defaultFadeInUpVariants,
} from "src/constants/motion";
import styled, { css } from "styled-components";
interface IImageDetail {
  imageSrc: string;
}
function ImageDetail({ imageSrc }: IImageDetail) {
  return (
    <StyledImageDetail
      initial="initial"
      animate="animate"
      exit="exit"
      variants={defaultFadeInUpVariants}
    >
      <StyledTestImage>
        <Image src={imageSrc} alt="imageDetail" fill />
      </StyledTestImage>
      {/* 
      <StyledTestImage bgSrc={imageSrc} /> */}
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
  width: 100%;
  padding-bottom: 100%;
`;
