import styled from "styled-components";

interface ITitleProps {
  title: string;
  subTitle: string;
  essential?: boolean;
}

function Title({ essential, title, subTitle }: ITitleProps) {
  return (
    <StyledWrapper>
      <StyledRowWrapper>
        <StyledTitle>{title}</StyledTitle>
        {essential && <StyledEssential>*</StyledEssential>}
      </StyledRowWrapper>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
    </StyledWrapper>
  );
}

export default Title;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 1.3rem 0 0.5rem 0;
`;

const StyledRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledTitle = styled.span`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color.white};
  opacity: 0.9;
`;

const StyledSubTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 0.93rem;
  color: ${({ theme }) => theme.color.grey100};
  letter-spacing: 0.1px;
  margin-top: 0.1rem;
`;

const StyledEssential = styled.span`
  margin: 0 0 0 4px;
  color: ${({ theme }) => theme.color.blueGreen};
`;
