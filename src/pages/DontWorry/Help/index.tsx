import { m } from "framer-motion";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import { defaultFadeInUpVariants } from "src/constants/motion";
import styled from "styled-components";

function Help() {
  return (
    <>
      <Nav />
      <StyledHelp>
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
            <tr>
              <td>exam</td>
              <td>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit natus, quidem repellat culpa cupiditate ipsa magni
                sapiente minus? Possimus quod doloribus iure. Hic dicta sed quas
                qui alias sunt sit.
              </td>
            </tr>
            <tr>
              <td>exam2</td>
              <td>exam</td>
            </tr>
            <tr>
              <td>exam</td>
              <td>exam</td>
            </tr>
            <tr>
              <td>exam</td>
              <td>exam</td>
            </tr>
            <tr>
              <td>exam2</td>
              <td>exam</td>
            </tr>
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
  justify-content: center;
  align-items: center;
`;
const StyledTable = styled(m.table)`
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.color.borderGrey};
  th,
  td {
    border: 1px solid ${({ theme }) => theme.color.borderGrey};
  }
  th {
    height: 3.625rem;
  }
  td {
    padding: 0.3125rem;
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
