import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  defaultFadeInLeftVariants,
  defaultFadeInUpVariants,
} from "src/constants/motion";
import styled from "styled-components";

interface Props {
  title: string;
  create_date: string;
  main_text: string;
}

//TODO 글 내용 부분 받아올 때 최대 length 두기, img props

function Timeline() {
  return (
    <StyledTimelineList>
      {/* 글이 있다면 */}
      <Link href={`/Main/Detail/$id값`}>
        <StyledTimelineContainer>
          <StyledTimelineItem>
            <StyledDate>글 작성 날짜</StyledDate>
            <StyledTitle
              initial="initial"
              animate="animate"
              exit="exit"
              variants={defaultFadeInLeftVariants}
            >
              글 제목
            </StyledTitle>
            <StyledSummary
              initial="initial"
              animate="animate"
              exit="exit"
              variants={defaultFadeInUpVariants}
            >
              글 내용
            </StyledSummary>
          </StyledTimelineItem>
        </StyledTimelineContainer>
      </Link>

      {/* 글이 없다면 */}
      <Link href={`/Main/Detail/$id값`}>
        <StyledTimelineContainer>
          <StyledTimelineItem>
            <StyledDate>글 작성 날짜</StyledDate>
            <StyledImg
              initial="initial"
              animate="animate"
              exit="exit"
              variants={defaultFadeInUpVariants}
            >
              <Image
                src="/images/food.jpg"
                alt="cardImg"
                width={100}
                height={100}
                layout="responsive"
                quality={100}
              />
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
