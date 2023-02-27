import styled from "styled-components";

interface IProps {
  title: string;
  subTitle: string;
}

function InputTitle({ title, subTitle }: IProps) {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
    </StyledWrapper>
  );
}

export default InputTitle;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.label`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color.white};
  opacity: 0.9;
`;

const StyledSubTitle = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 0.93rem;
  color: ${({ theme }) => theme.color.grey100};
  letter-spacing: 0.1px;
  margin-top: 0.1rem;
`;
