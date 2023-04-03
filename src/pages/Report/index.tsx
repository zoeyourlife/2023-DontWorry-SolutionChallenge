import { useState } from "react";
import Loading from "src/components/Common/Loading";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import Search from "src/components/Search";
import Timeline from "src/components/Timeline";
import useGetMain from "src/hooks/api/useGetMain";
import { IGetMainDataItem } from "src/remotes/main";
import styled from "styled-components";

function Report() {
  const { mainData, isLoading } = useGetMain();
  const [searchData, setSearchData] = useState<IGetMainDataItem[]>([]);
  function onClickBack() {
    setSearchData([]);
  }

  if (isLoading) {
    return <Loading />;
  }
  if (searchData.length !== 0) {
    return (
      <>
        <Nav />
        <StyledWrapper>
          <Search />
          <StyledBack onClick={onClickBack}>Back</StyledBack>
          {searchData.map((data, i) => (
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

  return (
    <>
      <Nav />
      <StyledWrapper>
        <Search searchSet={setSearchData} />
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

const StyledBack = styled.button`
  background-color: ${({ theme }) => theme.color.borderGrey};
  width: 100%;
  height: 3.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.button};
`;
const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 1rem;
`;
