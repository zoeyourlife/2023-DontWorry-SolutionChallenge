import { ChangeEvent, useState } from "react";
import Input from "src/components/Write/Input";
import Title from "src/components/Write/Title";
import { writeExplain } from "src/constants/writeExplain";

function FormTitle() {
  const [title, setTitle] = useState<string>("");

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <Title
        essential
        title={writeExplain[0].title}
        subTitle={writeExplain[0].subTitle}
      />
      <Input placeholder="Enter Title" value={title} onChange={onChangeTitle} />
    </>
  );
}

export default FormTitle;
