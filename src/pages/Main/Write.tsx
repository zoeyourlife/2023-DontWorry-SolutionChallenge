import SendIcon from "@mui/icons-material/Send";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import FormDate from "src/components/Write/Form/FormDate";
import FormImages from "src/components/Write/Form/FormImages";
import FormLocation from "src/components/Write/Form/FormLocation";
import FormSummary from "src/components/Write/Form/FormSummary";
import FormTag from "src/components/Write/Form/FormTag";
import FormTitle from "src/components/Write/Form/FormTitle";
import FormVideo from "src/components/Write/Form/FormVideo";
import styled from "styled-components";

function Write() {
  return (
    <>
      <Nav />
      <StyledWrapper>
        <h2>Write form</h2>
        <StyledHr />
        <StyledForm>
          <StyledProjectWrapper>
            <FormTitle />
            <FormDate />
            <FormTag />
            <FormSummary />
            <FormImages />
            <FormVideo />
            <FormLocation />
            <StyledBtnWrapper>
              <StyledBtnHover>
                <SendIcon fontSize="small" />
                <StyledBtn type="submit">Send</StyledBtn>
              </StyledBtnHover>
            </StyledBtnWrapper>
          </StyledProjectWrapper>
        </StyledForm>
      </StyledWrapper>
      <BottomNav selected="Write" />
    </>
  );
}

export default Write;

const StyledWrapper = styled.div`
  padding: 1rem;
`;

const StyledForm = styled.form`
  position: relative;
  display: flex;
  margin: 1rem 0;
`;

const StyledHr = styled.hr`
  margin-top: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.color.grey500};
  opacity: 0.5;
  width: 100%;
  height: 1px;
`;

const StyledProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const StyledBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4rem;
  color: ${({ theme }) => theme.color.grey100};
`;

const StyledBtnHover = styled.div`
  display: flex;

  :hover {
    transition: all 0.5s;
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
  }
`;

const StyledBtn = styled.button`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-left: 0.3rem;
`;
