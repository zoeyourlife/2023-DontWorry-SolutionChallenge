import { m } from "framer-motion";
import Image from "next/image";
import HrSummary from "src/components/About/HrSummary";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import { AboutFourKeyword } from "src/constants/aboutFourKeyword";
import {
  defaultFadeInLeftVariants,
  defaultFadeInRightVariants,
  defaultFadeInUpVariants,
} from "src/constants/motion";
import styled from "styled-components";

function About() {
  return (
    <>
      <Nav />
      <StyledWrapper>
        <StyledIntroBgWrapper>
          <Image
            src="/images/aboutRaisingHands.jpg"
            alt="people raising hands image"
            width={100}
            height={100}
            layout="responsive"
          />
        </StyledIntroBgWrapper>
        <m.div
          initial="initial"
          whileInView="animate"
          variants={defaultFadeInLeftVariants}
        >
          <StyledIntroText>
            Welcom to <br />
            Dontworry
          </StyledIntroText>
        </m.div>
        <StyledPaddingSection>
          <StyledHelpWomenWrapper>
            <StyledHelpWomenImgWrapper>
              <Image
                src="/images/aboutHelpWomen.jpg"
                alt="help image"
                width={100}
                height={100}
                layout="responsive"
              />
            </StyledHelpWomenImgWrapper>

            <StyledColumnWrapper>
              <span>
                We&rsquo;ll help you store easily <br />
                your evidence
              </span>
              <span>and you&rsquo;ll make good use of it</span>
              <span>
                We also provide you with a
                <br />
                helpful information
              </span>
              <span>and hope you out of your nightmare</span>
            </StyledColumnWrapper>
          </StyledHelpWomenWrapper>

          <StyledYourSideText
            initial="initial"
            whileInView="animate"
            variants={defaultFadeInRightVariants}
          >
            we are always on <span>your</span> side.
          </StyledYourSideText>

          <StyledSectionWrapper>
            <StyledColumnWrapper>
              <StyledDontWorryText
                initial="initial"
                whileInView="animate"
                variants={defaultFadeInUpVariants}
              >
                DontWorry
              </StyledDontWorryText>
              <StyledSubTitleText
                initial="initial"
                whileInView="animate"
                variants={defaultFadeInUpVariants}
              >
                Thinking from the victim&rsquo;s point of view
              </StyledSubTitleText>
              <StyledTextSpacing>
                We envisioned the service from the victim&rsquo;s point of view.{" "}
                <br />
                We were careful in our service initiative. <br />I hope this
                service will be helpful.
              </StyledTextSpacing>
            </StyledColumnWrapper>

            <StyledHandsImgWrapper>
              <Image
                src="/images/aboutHands.jpg"
                alt="people hands image"
                width={100}
                height={100}
                layout="responsive"
              />
            </StyledHandsImgWrapper>
          </StyledSectionWrapper>

          <StyledSectionWrapper>
            <StyledKeywordSummarySection>
              {AboutFourKeyword.map((item, index) => (
                <HrSummary
                  key={index}
                  title={item.title}
                  summary={item.summary}
                />
              ))}
            </StyledKeywordSummarySection>
          </StyledSectionWrapper>
        </StyledPaddingSection>
      </StyledWrapper>
      <BottomNav selected="DontWorry" />
    </>
  );
}

export default About;

const StyledWrapper = styled.div`
  padding-top: 3rem;
  width: 100%;
  height: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const StyledIntroBgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledIntroText = styled.h2`
  position: absolute;
  font-size: 1.85rem;
  letter-spacing: 0.1px;
  transform: translate(25%, -55%);
`;

const StyledHelpWomenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledHelpWomenImgWrapper = styled.div`
  width: 14rem;
  margin: 3.2rem 0;
  margin-right: 2rem;
`;

const StyledColumnWrapper = styled(m.div)`
  display: flex;
  flex-direction: column;
  span {
    margin: 0.23rem 0;
    font-size: 0.95rem;
    letter-spacing: 0.15px;
  }
`;

const StyledYourSideText = styled(m.div)`
  text-align: right;
  font-size: 1.85rem;
  letter-spacing: 0.1px;
  span {
    color: ${({ theme }) => theme.color.blueGreen};
  }
`;

const StyledDontWorryText = styled(m.p)`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.grey500};
  margin-bottom: 0.5rem;
`;

const StyledSubTitleText = styled(m.p)`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  opacity: 0.7;
`;

const StyledTextSpacing = styled.span`
  line-height: 1.5rem;
`;

const StyledHandsImgWrapper = styled.div`
  margin-top: 1.12rem;
  border-radius: ${({ theme }) => theme.borderRadius.imgCard};
  overflow: hidden;
`;

const StyledPaddingSection = styled.div`
  padding: 2rem;
`;

const StyledSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
`;

const StyledKeywordSummarySection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 0.4rem;
  margin-bottom: 5rem;
`;
