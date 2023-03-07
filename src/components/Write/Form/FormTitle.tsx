import Input from "src/components/Write/Input";
import Title from "src/components/Write/Title";
import { writeExplain } from "src/constants/writeExplain";

function FormTitle() {
  return (
    <>
      <Title
        essential
        title={writeExplain[0].title}
        subTitle={writeExplain[0].subTitle}
      />
      <Input placeholder="Enter Title" />
    </>
  );
}

export default FormTitle;
