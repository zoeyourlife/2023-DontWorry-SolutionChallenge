import { m } from "framer-motion";
import { useRouter } from "next/router";
import Loading from "src/components/Common/Loading";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import SelectCountry from "src/components/SelectCountry";
import { defaultFadeInUpVariants } from "src/constants/motion";
import useGetHelp from "src/hooks/api/useGetHelp";
import styled from "styled-components";

function Help() {
  const {
    query: { countryName },
  } = useRouter();

  const { helpData, isLoading } = useGetHelp({
    countryName,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <StyledHelp>
        <StyledSelectWrapper>
          <SelectCountry pageName={"Help"} />
        </StyledSelectWrapper>
        <StyledTable
          initial="initial"
          animate="animate"
          exit="exit"
          variants={defaultFadeInUpVariants}
        >
          <tbody>
            <tr>
              <th className="help">help</th>
              <th>where you can reach</th>
            </tr>
            {helpData.map((data, i) => (
              <tr key={i}>
                <td>{data.number}</td>
                <td key={i}>{data.summary}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </StyledHelp>
      <BottomNav />
    </>
  );
}

export default Help;

const StyledHelp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.color.background};
`;

const StyledTable = styled(m.table)`
  margin-bottom: 3.3rem;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.color.borderGrey};
  th,
  td {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.color.borderGrey};
  }
  th {
    font-size: 1.15rem;
    height: 3.625rem;
  }
  td {
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    padding: 0.3125rem;
    letter-spacing: 0.3px;
    line-height: 1.7rem;
  }
  tr {
    transition: all 0.5s;
    background-color: ${({ theme }) => theme.color.borderBackground};
    &:hover {
      background-color: #353535;
    }
  }

  .help {
    width: 55%;
  }
  width: 95%;
  margin-top: 1.25rem;
`;

const StyledSelectWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
`;
