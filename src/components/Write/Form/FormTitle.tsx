import { ChangeEvent } from "react";
import Input from "src/components/Write/Input";
import Title from "src/components/Write/Title";
import { writeExplain } from "src/constants/writeExplain";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function FormTitle({ onChange }: IProps) {
  return (
    <>
      <Title
        essential
        title={writeExplain[0].title}
        subTitle={writeExplain[0].subTitle}
      />
      <Input placeholder="Enter Title" onChange={onChange} />
    </>
  );
}

export default FormTitle;
