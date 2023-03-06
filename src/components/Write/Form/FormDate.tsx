import Input from "src/components/Write/Input";
import Title from "src/components/Write/Title";
import { writeExplain } from "src/constants/writeExplain";

//TODO: date 양식
function FormDate() {
  return (
    <>
      <Title
        essential
        title={writeExplain[1].title}
        subTitle={writeExplain[1].subTitle}
      />
      <Input placeholder="Enter Date" />
    </>
  );
}

export default FormDate;
