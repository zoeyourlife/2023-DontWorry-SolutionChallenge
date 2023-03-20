import { m } from "framer-motion";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { defaultFadeInUpVariants } from "src/constants/motion";
import useGetImageFolderDetail from "src/hooks/api/useGetImageFolderDetail";
import styled from "styled-components";

//FOL:Folder

interface IImageFOL {
  month: string;
}

function onClickImageFOL(month: string, route: NextRouter) {
  route.push({ pathname: "/ImageFolder/Detail", query: { month: month } });
}

function ImageFOL({ month }: IImageFOL) {
  const { imageFolderDetailData, isLoading } = useGetImageFolderDetail(month);
  const route = useRouter();

  return isLoading ? null : (
    <StyledImageFOL
      initial="initial"
      animate="animate"
      exit="exit"
      variants={defaultFadeInUpVariants}
      onClick={() => onClickImageFOL(month, route)}
    >
      <StyledTestImage>
        <Image
          src={imageFolderDetailData[0]}
          alt="imageDetail"
          fill
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            objectFit: "cover",
          }}
        />
      </StyledTestImage>
      <div>{month}</div>
      <div>{imageFolderDetailData.length}</div>
    </StyledImageFOL>
  );
}

export default ImageFOL;

const StyledImageFOL = styled(m.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
`;

const StyledTestImage = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;
