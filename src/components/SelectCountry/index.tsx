import React, { useState } from "react";
import styled from "styled-components";

interface ISelectCountries {
  label: string;
  value: number;
}

function SelectCountry() {
  const [isShowOptions, setIsShowOptions] = useState<boolean>(false);
  const [isOpenCountry, setIsOpenCountry] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const dropClickCountry = () => {
    setIsOpenCountry(!isOpenCountry);
  };

  const selectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  // select 태그는 커스텀 제한이 있기 떄문에 button 태그와 ul + li 태그로 구현 예정
  // 해야할 것 Lists
  // 선택한 기준(dropdown item)이 버튼 안에 들어가게
  // dropdown arrow 아이콘이 isOpen에 따라서 위 아래 바꾸기
  // dropwdown item 선택하면 버튼들은 초기화 되기
  // 한 번에 하나의 버튼만 open 되게 하기 (이 부분은 고려 X, 애초에 드랍다운 버튼 하나만 있을 예정)
  // active 효과: border, shadw
  // dropdown item 선택하면 api 연결하기
  // 위에 카테고리가 선택되지 않았을 때 disabled 처리하기.
  return (
    <>
      <div>
        <select onChange={selectOnChange}>
          <option selected disabled>
            Korea
          </option>
          <option value="1">us</option>
          <option value="2">us</option>
          <option value="3">us</option>
          <option value="4">us</option>
        </select>
      </div>
      {/* label tag & ul, li tag */}
      <div>
        <label>현재 값</label>
        <ul>
          <li>kr</li>
          <li>us</li>
          <li>ja</li>
        </ul>
      </div>
    </>
  );
}

export default SelectCountry;

const StyledSelectBox = styled.div`
  position: relative;
  width: 200px;
  padding: 8px;
  border-radius: 12px;
  background-color: #fff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &::before {
    content: "∨";
    position: absoulte;
    top: 1px;
    right: 8px;
    color: #49c181;
    font-size: 1.25rem;
  }
`;
