import Title from "src/components/Write/Title";
import { writeExplain } from "src/constants/writeExplain";

//TODO: video components 적용
function FormVideo() {
  return (
    <Title title={writeExplain[6].title} subTitle={writeExplain[6].subTitle} />
  );
}

export default FormVideo;
