import styled from "styled-components";

function TodayDate() {
  let today = new Date();

  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const dateString = year + "." + month + "." + day;

  return <StyledDate>{dateString}</StyledDate>;
}

export default TodayDate;

const StyledDate = styled.p`
  letter-spacing: 0.5px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 1.2rem;
`;
