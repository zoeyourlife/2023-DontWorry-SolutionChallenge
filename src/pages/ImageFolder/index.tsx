import Loading from "src/components/Common/Loading";
import ImageFOL from "src/components/ImageFOL";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import useGetImageFolder from "src/hooks/api/useGetImageFolder";
import styled from "styled-components";

function ImageFolder() {
  const { imageFolderData, isLoading } = useGetImageFolder();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <StyledImageFolder>
        {imageFolderData.map((props, index) => (
          <ImageFOL key={index} month={props} />
        ))}
      </StyledImageFolder>
      <BottomNav selected="Images" />
    </>
  );
}

export default ImageFolder;

const StyledImageFolder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;
