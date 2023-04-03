import { useRouter } from "next/router";
import Loading from "src/components/Common/Loading";
import LawContent from "src/components/Law/LawContent";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import SelectCountry from "src/components/SelectCountry";
import useGetLaw from "src/hooks/api/useGetLaw";
import styled from "styled-components";

function Law() {
  const {
    query: { countryName },
  } = useRouter();

  const { lawData, isLoading } = useGetLaw({
    countryName,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <StyledWrapper>
        <StyledSelectWrapper>
          <SelectCountry pageName="Law" />
        </StyledSelectWrapper>
        <StyledLaw>
          {lawData.map((data, i) => (
            <LawContent
              key={i}
              form={data.lawName}
              policy={data.policy}
              law={data.lawName}
              punishment={data.punishments}
              resolutionProcedures={data.resolutionProcedures}
            />
          ))}
        </StyledLaw>
      </StyledWrapper>
      <BottomNav />
    </>
  );
}

export default Law;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.color.background};
`;

const StyledLaw = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.56rem 9rem 1.56rem;
  gap: 1.2rem;
`;

const StyledSelectWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
`;
