import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "src/components/Common/Loading";
import Modal from "src/components/Modal";
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

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

function Write() {
  const [title, setTitle] = useState<string>("");
  const [incidentDate, setIncidentDate] = useState<string>("");
  const [mainText, setMainText] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [files, setFiles] = useState<string | Blob>(Object);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeIncidentDate = (e: ChangeEvent<HTMLInputElement>) => {
    setIncidentDate(e.target.value);
  };

  const onChangeMainText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMainText(e.target.value);
  };

  const onChangeLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const onChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];
    formData.append("files", e.currentTarget.value[0]);
    setFiles(files);
  };

  function onSubmit() {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("incidentDate", incidentDate);
    formData.append("mainText", mainText);
    formData.append("location", location);
    formData.append("category", category);
    formData.append("files", files);

    if (files === undefined) {
      formData.delete("files");
    }

    axios
      .post<{}, IPostWriteData>(`${API_BASED_URL}/write`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        <Loading />;
        router.push("/");
      });
  }

  const router = useRouter();
  const { register, handleSubmit } = useForm<IPostWriteData>();
  const [showModal, setShowModal] = useState(false);

  function onClickIUploadBtn() {
    setShowModal(!showModal);
  }

  return (
    <>
      <Nav />
      {showModal && (
        <Modal
          isOpen={showModal}
          title="Are you going to post a post?"
          content="This article written now cannot be edited or deleted later. dontworry is blocking edits and deletes to be a stronger fence on your side
          Please submit carefully before clicking submit.
          thank you for your effort"
          path="/Main"
        />
      )}
      <StyledWrapper>
        <h2>Write form</h2>
        <StyledHr />
        <StyledForm
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          method="post"
        >
          <StyledProjectWrapper>
            <FormTitle {...register("title")} onChange={onChangeTitle} />
            <FormDate
              {...register("incidentDate")}
              onChange={onChangeIncidentDate}
            />
            <FormTag {...register("category")} onChange={onChangeCategory} />
            <FormSummary
              {...register("mainText")}
              value={mainText}
              onChange={onChangeMainText}
            />
            {/* <FormVideo /> */}
            <FormLocation
              {...register("location")}
              onChange={onChangeLocation}
            />
            <FormImages {...register("files")} onChange={onChangeFiles} />
            <StyledBtnWrapper>
              <StyledBtnHover>
                <StyledBtn type="submit" onClick={onClickIUploadBtn}>
                  <SendIcon fontSize="small" />
                  <span>Send</span>
                </StyledBtn>
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
  padding-bottom: 5.5rem;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-left: 0.3rem;
  min-width: 10rem;

  span {
    margin-left: 0.3rem;
  }
`;
