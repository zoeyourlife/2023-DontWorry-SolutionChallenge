import { ChangeEvent } from "react";
import Input from "src/components/Write/Input";
import Title from "src/components/Write/Title";
import { writeExplain } from "src/constants/writeExplain";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function FormDate({ onChange }: IProps) {
  return (
    <>
      <Title
        essential
        title={writeExplain[1].title}
        subTitle={writeExplain[1].subTitle}
      />
      <Input type="date" placeholder="Enter Date" onChange={onChange} />
    </>
  );
}

export default FormDate;
