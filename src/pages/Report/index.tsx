import Loading from "src/components/Common/Loading";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import Search from "src/components/Search";
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
        <Search />
        {mainData.map((data, i) => (
          <Timeline
            key={i}
            id={data.id}
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

export default Report;

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 1rem;
`;
