import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import Nav from "src/components/Nav";
import BottomNav from "src/components/Nav/BottomNav";
import FormDate from "src/components/Write/Form/FormDate";
import FormImages from "src/components/Write/Form/FormImages";
import FormLocation from "src/components/Write/Form/FormLocation";
import FormSummary from "src/components/Write/Form/FormSummary";
import FormTag from "src/components/Write/Form/FormTag";
import FormTitle from "src/components/Write/Form/FormTitle";
import { API_BASED_URL } from "src/constants/apiUrl";
import { IPostWriteData } from "src/remotes/upload";
import styled from "styled-components";

function Write() {
  const [title, setTitle] = useState<string>("");
  const [incidentDate, setIncidentDate] = useState<string>("");
  const [mainText, setMainText] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [category, setCategory] = useState<string[]>();

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeIncidentDate = (e: ChangeEvent<HTMLInputElement>) => {
    setIncidentDate(e.target.value);
  };
  const onChangeMainText = (e: ChangeEvent<HTMLInputElement>) => {
    setMainText(e.target.value);
  };

  const onChangeLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };
  const onChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory([e.target.value]);
  };

  function onSubmit() {
    const formData = new FormData();

    formData.append("title", title);
    console.log(title);
    formData.append("incidentDate", incidentDate);
    formData.append("mainText", mainText);
    formData.append("location", location);
    formData.append("category", category);
    // formData.append("files", files);

    axios
      .post<{}, IPostWriteData>(`${API_BASED_URL}/write`, formData, {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          withCredentials: true,
        },
      })
      .then((res) => {
        router.push("/Main");
      });
  }

  const router = useRouter();
  const { register, handleSubmit } = useForm<IPostWriteData>();

  return (
    <>
      <Nav />
      <StyledWrapper>
        <h2>Write form</h2>
        <StyledHr />
        <StyledForm
          onSubmit={handleSubmit(onSubmit)}
          encType="application/json"
          method="post"
        >
          <StyledProjectWrapper>
            <FormTitle {...register("title")} onChange={onChangeTitle} />
            <FormDate
              {...register("incidentDate")}
              onChange={onChangeIncidentDate}
            />
            <FormTag {...register("category")} onChange={onChangeCategory} />
            <FormSummary {...register("title")} onChange={onChangeMainText} />
            <FormImages />
            {/* <FormVideo /> */}
            <FormLocation {...register("title")} onChange={onChangeLocation} />
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
