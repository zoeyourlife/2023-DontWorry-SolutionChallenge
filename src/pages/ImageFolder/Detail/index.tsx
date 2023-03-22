import { useRouter } from "next/router";
import Loading from "src/components/Common/Loading";
import ImageDetail from "src/components/ImageDetail";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import useGetImageFolderDetail from "src/hooks/api/useGetImageFolderDetail";
import styled from "styled-components";

function Detail() {
  const route = useRouter();
  let month = route?.query.month;

  const { imageFolderDetailData, isLoading } = useGetImageFolderDetail(
    month as string,
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <StyledDetail>
        {imageFolderDetailData.map((imageSrc, index) => (
          <ImageDetail imageSrc={imageSrc} key={index} />
        ))}
      </StyledDetail>
      <BottomNav selected="Images" />
    </>
  );
}

export default Detail;

const StyledDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.15rem;
  padding: 0.15rem;
  width: 100%;
`;
