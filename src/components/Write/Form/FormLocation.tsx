import { ChangeEvent } from "react";
import Input from "src/components/Write/Input";
import Title from "src/components/Write/Title";
import { writeExplain } from "src/constants/writeExplain";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

//TODO: google map api
function FormLocation({ onChange }: IProps) {
  return (
    <>
      <Title
        essential
        title={writeExplain[4].title}
        subTitle={writeExplain[4].subTitle}
      />
      <Input placeholder="Enter Location" required={true} onChange={onChange} />
    </>
  );
}

export default FormLocation;
