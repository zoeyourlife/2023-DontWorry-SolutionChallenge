import { useRouter } from "next/router";
import Image from "next/image";
import Tag from "src/components/Common/Tag";
import Nav from "src/components/Nav";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";

//TODO : button component 넣기
function Detail() {
  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <Nav />
      <StyledWrapper>
        <StyledTitle>글 제목</StyledTitle>
        <StyledDate>날짜</StyledDate>

        <StyledTagWrapper>
          <Tag />
        </StyledTagWrapper>

        <StyledContentWrapper>
          <StyledContent>글내용</StyledContent>
        </StyledContentWrapper>

        <StyledLocationWrapper>
          <StyledLocationIcon /> <StyledLocation>장소 명</StyledLocation>
        </StyledLocationWrapper>

        <StyledImgWrapper>
          <StyledImg>
            <Image
              src="/images/food.jpg"
              alt="cardImg"
              width={100}
              height={100}
              layout="responsive"
              quality={100}
            />
          </StyledImg>
        </StyledImgWrapper>

        {/* button component 만들어지면 넣을 예정 */}
      </StyledWrapper>
    </>
  );
}

export default Detail;

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 1rem 1rem;
`;

const StyledTitle = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 1.5rem;
`;

const StyledDate = styled.p`
  opacity: 0.5;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: 0.8rem;
  margin: 0.5rem 0;
`;

const StyledLocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  cursor: pointer;
`;

const StyledLocationIcon = styled(LocationOnIcon)`
  color: ${({ theme }) => theme.color.grey};
  width: 1.2rem;
  margin-left: 0.2rem;
`;

const StyledLocation = styled.span`
  opacity: 0.5;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: 0.8rem;
  margin-left: 0.2rem;
`;

const StyledTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledContentWrapper = styled.div`
  height: auto;
  margin: 2rem 0;
`;

const StyledContent = styled.p`
  line-height: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 1rem;
`;

const StyledImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const StyledImg = styled.div`
  position: relative;
  width: 13.5rem;
  height: 13.5rem;
  margin: 0.5rem 0rem 0.5rem 0;
  border-radius: ${({ theme }) => theme.borderRadius.imgCard};
  overflow: hidden;
`;
