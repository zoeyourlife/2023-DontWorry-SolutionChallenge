import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import TodayDate from "src/components/Common/Date/TodayDate";
import Loading from "src/components/Common/Loading";
import Tag from "src/components/Common/Tag";
import ReportSubTitle from "src/components/Common/Text/ReportSubTitle";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import MakePdf from "src/components/Pdf/MakePdf";
import useGetMainById from "src/hooks/api/useGetMainById";
import styled from "styled-components";

function Detail() {
  const {
    query: { id },
  } = useRouter();

  const { post, isLoading } = useGetMainById({
    id,
  });

  const pdf = MakePdf();

  const colorChangeRef = useRef<HTMLDivElement>(null);
  const currentRef = colorChangeRef.current;

  if (isLoading) {
    <Loading />;
  }

  async function onSaveBtnClick() {
    if (currentRef) {
      alert("converted to pdf ...");
      currentRef.style.color = "#000000";
    }

    await pdf.viewWithPdf();
    if (currentRef) {
      currentRef.style.color = "#ffffff";
    }
  }

  return (
    <>
      <Nav />
      <StyledWrapper ref={colorChangeRef} className="pdfWrapper">
        <StyledContentWrapper>
          <StyledTagWrapper>
            <Tag category="DontWorry" />
          </StyledTagWrapper>
          <StyledTitle>An incident to report</StyledTitle>
          <ReportSubTitle number={1} title="When" />
          <StyledContent>{post?.createdDate}</StyledContent>
          <ReportSubTitle number={2} title="The day of the incident" />
          <StyledContent>{post?.incidentDate}</StyledContent>
          <ReportSubTitle
            number={3}
            title="The place where the incident occurred"
          />
          <StyledContent>{post?.location}</StyledContent>
          <ReportSubTitle number={4} title="Incident details" />
          <StyledContent>{post?.mainText}</StyledContent>

          {post?.storeFileName ? (
            <>
              <ReportSubTitle number={5} title="Attached photo" />
              <StyledImgWrapper>
                <StyledImg>
                  {post?.storeFileName.map((i, index) => (
                    <Image
                      key={index}
                      src={i}
                      alt="cardImg"
                      layout="fill"
                      sizes="13.5rem"
                      quality={100}
                    />
                  ))}
                </StyledImg>
              </StyledImgWrapper>
            </>
          ) : null}
          <StyledTodayDateWrapper>
            <TodayDate />
          </StyledTodayDateWrapper>
        </StyledContentWrapper>
      </StyledWrapper>
      <StyledBtnWrapper>
        <StyledBtn onClick={onSaveBtnClick}>save as pdf</StyledBtn>
      </StyledBtnWrapper>
      <BottomNav selected="Home" />
    </>
  );
}

export default Detail;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding: 1rem 1rem;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 1.43rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 1rem 0 2.2rem 0;
`;

const StyledTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledContent = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 0.9rem;
  margin: 1rem 0;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const StyledTodayDateWrapper = styled.div`
  margin: 2.5rem 0 1rem 0;
`;

const StyledBtnWrapper = styled.div`
  position: relative;
  min-height: 11rem;
  height: auto;
`;

const StyledBtn = styled.button`
  position: absolute;
  right: 0;
  margin: 1rem 1rem;
  padding: 0.3rem 0.8rem;

  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme }) => theme.color.blueGreen};
  border-radius: ${({ theme }) => theme.borderRadius.imgCard};
`;
