import { useRef, useState } from "react";
import styled from "styled-components";

interface IImageUploadProps {
  value?: string | null;
  onChange?: (value: string | null) => void;
  src?: string;
}

//TODO: image api
function ImageUpload({ value, onChange, src }: IImageUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState([]);
  const [previewImage, setPreviewImage] = useState<string>("");

  return (
    <StyledWrapper>
      <StyledPreviewWrapper>
        {value ? (
          <StyledPreview src={previewImage} alt="preview image" />
        ) : (
          "Image Upload"
        )}
      </StyledPreviewWrapper>
      <StyledInput type="file" accept="image/*" ref={inputRef} multiple />
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
