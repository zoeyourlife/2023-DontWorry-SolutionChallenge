import { m } from "framer-motion";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import { defaultFadeInUpVariants } from "src/constants/motion";
import styled from "styled-components";

interface ILawUnit {
  title: string;
  content: string;
}

const lawData: any = [
  { title: "Form", content: "School Violence shape simply write" },
  { title: "Policy", content: "Own Policy in this country ex) 무관용정책?" },
  { title: "Law", content: "Simple Content about law" },
  {
    title: "Punishment",
    content: "어떠한 수준의 폭력은 이러이러한 처벌을 한다(벌금 or 몇넌 구형)",
  },
  {
    title: "Resolution Procedures",
    content:
      "각 나라별로 학교폭력을 어떤 식으로 해결하는지에 대한 간단 텍스트 설명",
  },
];

function LawUnit(title: string, content: string) {
  return (
    <>
      <StyledTitle
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
        {lawData.map((data: ILawUnit) => LawUnit(data.title, data.content))}
      </StyledLaw>
      <BottomNav />
    </>
  );
}

export default Law;

const StyledLaw = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4em 1.56rem 1.56rem 1.56rem;
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
  font-weight: 600;
`;
