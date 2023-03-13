import styled from "styled-components";

function ReportBalloon() {
  return (
    <StyledBalloon>
      <StyledMsg>Don&rsquo;t Worry Button</StyledMsg>
    </StyledBalloon>
  );
}

export default ReportBalloon;

const StyledBalloon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 14rem;
  height: 3.2rem;

  border-radius: 26px;
  background-color: ${({ theme }) => theme.color.borderBackground};
  opacity: background-color 0.2;

  ::after {
    position: absolute;
    border-bottom: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.color.borderBackground};

    content: "";
    bottom: -10px;
    left: 6.5rem;
  }
`;

const StyledMsg = styled.span`
  font-size: 0.97rem;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  letter-spacing: 0.3px;
  line-height: 1.9rem;
`;
