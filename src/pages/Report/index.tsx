import { NextPageContext } from "next";
import Loading from "src/components/Common/Loading";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import Timeline from "src/components/Timeline";
import useGetMain from "src/hooks/api/useGetMain";
import styled from "styled-components";

function Report() {
  const { mainData, isLoading } = useGetMain();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <StyledWrapper>
        {mainData.map((data, i) => (
          <Timeline
            key={i}
            title={data.title}
            incidentDate={data.incidentDate}
            createdDate={data.createdDate}
            storeFileName={data.storeFileName}
            mainText={data.mainText}
          />
        ))}
      </StyledWrapper>
      <BottomNav selected="Home" />
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const cookie = context.req ? context.req.headers.cookie : "";
  return {
    props: { cookie },
  };
}

export default Report;

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 1rem;
`;
