import TextArea from "src/components/Write/TextArea";
import Title from "src/components/Write/Title";
import { writeExplain } from "src/constants/writeExplain";

function FormSummary() {
  return (
    <>
      <Title
        essential
        title={writeExplain[3].title}
        subTitle={writeExplain[3].subTitle}
      />
      <TextArea maxCount={3000} count={true} placeholder="Enter Summary" />
    </>
  );
}

export default FormSummary;
