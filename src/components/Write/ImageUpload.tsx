import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { API_BASED_URL } from "src/constants/apiUrl";
import { IPostWriteData } from "src/remotes/upload";
import styled from "styled-components";

interface IImageUploadProps {
  value?: string | null;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  src?: string;
}

//TODO: image api
function ImageUpload({ value, onChange, src }: IImageUploadProps) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IPostWriteData>();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewImage, setPreviewImage] = useState<string>("");

  const saveFileImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [files, setFiles] = useState<File>();

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];
    formData.append("file", e.currentTarget.value[0]);
    setFiles(files);
  };

  const formFileData = new FormData();
  formFileData.append("files", files);

  axios
    .post<{}, IPostWriteData>(`${API_BASED_URL}/write`, formFileData, {
      headers: {
        Accept: "*/*",
        "Content-Type": "multipart/form-data",
        withCredentials: true,
      },
    })
    .then((res) => {
      router.push("/Main");
    });
  return (
    <StyledWrapper>
      <StyledPreviewWrapper>
        {previewImage && (
          <StyledPreview src={previewImage} alt="preview image" />
        )}
      </StyledPreviewWrapper>
      <StyledInput
        {...register("title")}
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        ref={inputRef}
        multiple
        onChange={(e) => {
          saveFileImage(e),
            {
              onChangeFiles,
            };
        }}
      />
    </StyledWrapper>
  );
}

export default ImageUpload;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const StyledPreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 7rem;

  background-color: ${({ theme }) => theme.color.grey500};
  border-radius: ${({ theme }) => theme.borderRadius.imgCard};
  overflow: hidden;
  cursor: pointer;
`;

const StyledPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.imgCard};
`;

const StyledInput = styled.input`
  margin-left: 0.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;
