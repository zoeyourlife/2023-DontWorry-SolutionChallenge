import { m } from "framer-motion";
import Link from "next/link";
import {
  defaultFadeInLeftVariants,
  defaultFadeInUpVariants,
} from "src/constants/motion";
import styled from "styled-components";

interface IProps {
  id: number;
  title: string;
  create_date: string;
  storeFileName: string;
}

function Timeline({ id, title, create_date, storeFileName }: IProps) {
  return (
    <StyledTimelineList>
      <Link href={`/Main/Detail/${id}`}>
        <StyledTimelineContainer>
          <StyledTimelineItem>
            <StyledDate>{create_date}</StyledDate>
            <StyledTitle
              initial="initial"
              animate="animate"
              exit="exit"
              variants={defaultFadeInLeftVariants}
            >
              {title}
            </StyledTitle>
            <StyledSummary
              initial="initial"
              animate="animate"
              exit="exit"
              variants={defaultFadeInUpVariants}
            >
              {storeFileName}
            </StyledSummary>
          </StyledTimelineItem>
        </StyledTimelineContainer>
      </Link>
      <Link href={`/Main/Detail/${id}`}>
        <StyledTimelineContainer>
          <StyledTimelineItem>
            <StyledDate>{create_date}</StyledDate>
            <StyledImg
              initial="initial"
              animate="animate"
              exit="exit"
              variants={defaultFadeInUpVariants}
            >
              {/*               
              <Image
                src={storeFileName}
                alt="cardImg"
                width={100}
                height={100}
                layout="responsive"
                quality={100}
              /> */}
            </StyledImg>
          </StyledTimelineItem>
        </StyledTimelineContainer>
      </Link>
    </StyledTimelineList>
  );
}

export default Timeline;

const StyledTimelineList = styled.ul`
  border-left: 2px solid ${({ theme }) => theme.color.grey};
`;

const StyledTimelineContainer = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.color.grey100};
`;

const StyledDate = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const StyledTitle = styled(m.h3)`
  margin: 1rem 0 0.5rem 0;
`;

const StyledSummary = styled(m.p)`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 1.3rem;
`;

const StyledTimelineItem = styled.div`
  position: relative;
  padding: 1.8rem 1.25rem;
  &:hover {
    cursor: pointer;
    transition: all 0.3s;
    color: #ffffffd2;
  }
  &::before {
    content: "";
    position: absolute;
    top: 2rem;
    left: -7px;
    width: 0.75rem;
    height: 0.75rem;
    background: #6e6e6e;
    border-radius: 50%;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
  }
  &:hover::before {
    transition: all 0.3s;
    background: #ffffffc5;
  }
`;

const StyledImg = styled(m.div)`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 1rem 0 0.5rem 0;
  border-radius: ${({ theme }) => theme.borderRadius.imgCard};
  overflow: hidden;
`;
