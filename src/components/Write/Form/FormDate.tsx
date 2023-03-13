import { ChangeEvent, useState } from "react";
import Input from "src/components/Write/Input";
import Title from "src/components/Write/Title";
import { writeExplain } from "src/constants/writeExplain";

//TODO: date 양식
function FormDate() {
  const [date, setDate] = useState<string>("");

  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <>
      <Title
        essential
        title={writeExplain[1].title}
        subTitle={writeExplain[1].subTitle}
      />
      <Input
        type="date"
        placeholder="Enter Date"
        value={date}
        onChange={onChangeDate}
      />
    </>
  );
}

export default FormDate;
