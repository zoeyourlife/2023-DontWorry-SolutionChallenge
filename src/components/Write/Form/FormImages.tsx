import ImageUpload from "src/components/Write/ImageUpload";
import Title from "src/components/Write/Title";
import { writeExplain } from "src/constants/writeExplain";

function FormImages() {
  return (
    <>
      <Title
        title={writeExplain[5].title}
        subTitle={writeExplain[5].subTitle}
      />
      <ImageUpload />
    </>
  );
}

export default FormImages;
