import { m } from "framer-motion";
import { defaultFadeInUpVariants } from "src/constants/motion";
import styled from "styled-components";

interface ILawProps {
  form: string;
  policy: string;
  law: string;
  punishment: string[];
  resolutionProcedures: string;
}

function LawContent({
  form,
  policy,
  law,
  punishment,
  resolutionProcedures,
}: ILawProps) {
  return (
    <>
      <StyledTitle>Form</StyledTitle>
      <StyledContent
        initial="initial"
        animate="animate"
        exit="exit"
        variants={defaultFadeInUpVariants}
      >
        {form}
      </StyledContent>
      <StyledTitle>Policy</StyledTitle>
      <StyledContent
        initial="initial"
        animate="animate"
        exit="exit"
        variants={defaultFadeInUpVariants}
      >
        {policy}
      </StyledContent>
      <StyledTitle>Law</StyledTitle>
      <StyledContent
        initial="initial"
        animate="animate"
        exit="exit"
        variants={defaultFadeInUpVariants}
      >
        {law}
      </StyledContent>
      <StyledTitle>Punishment</StyledTitle>
      <StyledContent
        initial="initial"
        animate="animate"
        exit="exit"
        variants={defaultFadeInUpVariants}
      >
        {punishment}
      </StyledContent>
      <StyledTitle>ResolutionProcedures</StyledTitle>
      <StyledContent
        initial="initial"
        animate="animate"
        exit="exit"
        variants={defaultFadeInUpVariants}
      >
        {resolutionProcedures}
      </StyledContent>
    </>
  );
}

export default LawContent;

const StyledTitle = styled(m.div)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 1.3rem;
  margin-top: 0.6rem;
`;

const StyledContent = styled(m.div)`
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;
