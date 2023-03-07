import Title from "src/components/Write/Title";
import { writeExplain } from "src/constants/writeExplain";

//TODO: google map api
function FormLocation() {
  return (
    <>
      <Title
        essential
        title={writeExplain[4].title}
        subTitle={writeExplain[4].subTitle}
      />
    </>
  );
}

export default FormLocation;
