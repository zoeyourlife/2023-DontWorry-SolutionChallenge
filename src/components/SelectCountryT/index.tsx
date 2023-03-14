import { useState } from "react";
import styled from "styled-components";

function SelectCountryT() {
  const [selectedCountry, setSelectedCountry] = useState<String>("");

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCountry(value);
  };
  return (
    <StyledSelectDiv>
      <StyledSelect onChange={selectChange}>
        <option selected disabled>
          Choose Country ...
        </option>
        <option value="US">United States</option>
        <option value="KR">Korea</option>
        <option value="JP">Japan</option>
        <option value="CN">China</option>
      </StyledSelect>
      {selectedCountry && <h2>{selectedCountry}</h2>}
    </StyledSelectDiv>
  );
}

export default SelectCountryT;

const StyledSelectDiv = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSelect = styled.select`
  width: 9rem;
  padding: 0.5rem;
  border: 0.0425rem solid #999;
  border-radius: 5px;
  background-color: #1f1f1f;
  color: white;
`;
