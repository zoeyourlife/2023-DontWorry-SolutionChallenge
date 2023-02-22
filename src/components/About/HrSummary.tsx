import { motion } from "framer-motion";
import { defaultFadeInScaleVariants } from "src/constants/motion";
import styled from "styled-components";

interface IProps {
  title: string;
  summary: string;
}

function HrSummary({ title, summary }: IProps) {
  return (
    <StyledIconSummaryWrapper
      initial="initial"
      whileInView="animate"
      variants={defaultFadeInScaleVariants}
    >
      {title}
      <StyledHr />
      <p>{summary}</p>
    </StyledIconSummaryWrapper>
  );
}

export default HrSummary;

const StyledIconSummaryWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 7rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  p {
    opacity: 0.95;
    font-size: 1rem;
    margin: 1rem 0rem;
  }
`;

const StyledHr = styled.hr`
  margin-top: 0.2rem;
  width: 7rem;
  height: 2px;
`;
