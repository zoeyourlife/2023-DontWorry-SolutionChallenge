import { ChangeEvent } from "react";
import ImageUpload from "src/components/Write/ImageUpload";
import Title from "src/components/Write/Title";
import { writeExplain } from "src/constants/writeExplain";

interface IProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function FormImages({ onChange }: IProps) {
  return (
    <>
      <Title
        title={writeExplain[5].title}
        subTitle={writeExplain[5].subTitle}
      />
      <ImageUpload onChange={onChange} required={false} />
    </>
  );
}

export default FormImages;
