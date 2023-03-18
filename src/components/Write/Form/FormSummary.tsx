import { ChangeEvent } from "react";
import TextArea from "src/components/Write/TextArea";
import Title from "src/components/Write/Title";
import { writeExplain } from "src/constants/writeExplain";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function FormSummary({ onChange }: IProps) {
  return (
    <>
      <Title
        essential
        title={writeExplain[3].title}
        subTitle={writeExplain[3].subTitle}
      />
      <TextArea
        maxCount={3000}
        count={true}
        placeholder="Enter Summary"
        onChange={onChange}
      />
    </>
  );
}

export default FormSummary;
