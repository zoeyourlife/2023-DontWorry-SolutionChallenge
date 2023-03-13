import styled from "styled-components";

function MainMsg() {
  return (
    <StyledWrapper>
      <StyledTitle>
        Our Identity is <br />
        &#8220;Leave No One Behind&#8221;
      </StyledTitle>
      <StyledSubTitle>
        Our Identity is <br />
        &#8220;Leave No One Behind&#8221;
      </StyledSubTitle>
    </StyledWrapper>
  );
}

export default MainMsg;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.span`
  letter-spacing: 0.3px;
  word-spacing: 1.8px;
  line-height: 1.9rem;
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const StyledSubTitle = styled.span`
  color: ${({ theme }) => theme.color.grey500};
  line-height: 1.1rem;
  font-size: 0.85rem;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  margin-top: 0.5rem;
`;
