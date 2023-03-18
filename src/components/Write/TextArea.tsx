import { ChangeEvent, useState } from "react";
import styled from "styled-components";

interface ITextAreaProps {
  count?: boolean;
  maxCount?: number;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function TextArea({ count, maxCount, placeholder, onChange }: ITextAreaProps) {
  const [content, setContent] = useState<string>("");

  return (
    <>
      <StyledTextArea
        onChange={(e) => {
          setContent(e.target.value), { onChange };
        }}
        value={content}
        placeholder={placeholder}
        required
        maxLength={3000}
      />
      {count && <StyledCount>{`${content.length} / ${maxCount}`}</StyledCount>}
    </>
  );
}

export default TextArea;

const StyledTextArea = styled.textarea<ITextAreaProps>`
  width: 100%;
  min-height: 10rem;
  height: auto;
  padding: 0.875rem 1.25rem;

  box-sizing: border-box;
  resize: none;

  border-radius: ${({ theme }) => theme.borderRadius.imgCard};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.grey500};
  letter-spacing: 0.1px;

  ::placeholder {
    color: ${({ theme }) => theme.color.white};
    opacity: 0.6;
  }

  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.blueGreen};
  }
`;

const StyledCount = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.7rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 0.8rem;
`;
