import styled from "styled-components";

interface IReportProps {
  number: number;
  title: string;
}

function ReportSubTitle({ number, title }: IReportProps) {
  return (
    <StyledWrapper>
      {number}. {title}
    </StyledWrapper>
  );
}

export default ReportSubTitle;

const StyledWrapper = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 1rem;
`;
