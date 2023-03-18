import { ChangeEvent, useState } from "react";
import Input from "src/components/Write/Input";
import Title from "src/components/Write/Title";
import { writeExplain } from "src/constants/writeExplain";
import styled from "styled-components";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

//TODO: 여러개 입력받기
function FormTag({ onChange }: IProps) {
  const [category, setCategory] = useState<string>("");

  const onChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <Title
        title={writeExplain[2].title}
        subTitle={writeExplain[2].subTitle}
      />
      <StyledInputWrapper>
        <Input
          placeholder="Enter Tag"
          value={category}
          onChange={(e) => {
            onChangeCategory(e), { onChange };
          }}
        />
      </StyledInputWrapper>
    </>
  );
}

export default FormTag;

const StyledInputWrapper = styled.div`
  width: 10rem;
`;
