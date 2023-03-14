import NotificationsIcon from "@mui/icons-material/Notifications";
import styled from "styled-components";

function ReportBtn() {
  return (
    <StyledBtn>
      <NotificationsIcon fontSize="large" />
    </StyledBtn>
  );
}

export default ReportBtn;

const StyledBtn = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.color.grey100};
  :hover {
    transition: color ease-in 0.37s;
    color: ${({ theme }) => theme.color.blueGreen};
  }
`;
