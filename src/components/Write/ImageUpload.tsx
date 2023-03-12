import { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";

interface IImageUploadProps {
  value?: string | null;
  onChange?: (value: string | null) => void;
  src?: string;
}

//TODO: image api
function ImageUpload({ value, onChange, src }: IImageUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewImage, setPreviewImage] = useState<string>("");

  const saveFileImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <StyledWrapper>
      <StyledPreviewWrapper>
        {previewImage && (
          <StyledPreview src={previewImage} alt="preview image" />
        )}
      </StyledPreviewWrapper>
      <StyledInput
        type="file"
        accept="image/*"
        ref={inputRef}
        multiple
        onChange={saveFileImage}
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
