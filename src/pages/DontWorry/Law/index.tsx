import { m } from "framer-motion";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import { lawData } from "src/constants/lawData";
import { defaultFadeInUpVariants } from "src/constants/motion";
import styled from "styled-components";

interface ILawUnit {
  title: string;
  content: string;
}

function LawUnit(title: string, content: string, index: number) {
  return (
    <>
      <StyledTitle
        key={index}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={defaultFadeInUpVariants}
      >
        {title}
      </StyledTitle>
      <StyledContent
        initial="initial"
        animate="animate"
        exit="exit"
        variants={defaultFadeInUpVariants}
      >
        {content}
      </StyledContent>
    </>
  );
}

function Law() {
  return (
    <>
      <Nav />
      <StyledLaw>
        <StyledCountry
          initial="initial"
          animate="animate"
          exit="exit"
          variants={defaultFadeInUpVariants}
        >
          🇺🇸 US
        </StyledCountry>
        {lawData.map((data: ILawUnit, index) =>
          LawUnit(data.title, data.content, index),
        )}
      </StyledLaw>
      <BottomNav />
    </>
  );
}

export default Law;

const StyledLaw = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 1.56rem 1.56rem 1.56rem;
  gap: 1.5rem;
`;

const StyledTitle = styled(m.div)`
  font-size: 1.25rem;
`;

const StyledContent = styled(m.div)`
  font-size: 0.75rem;
  margin-left: 1.25rem;
  margin-bottom: 1rem;
`;

const StyledCountry = styled(m.div)`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;
