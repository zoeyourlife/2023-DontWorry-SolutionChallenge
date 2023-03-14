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
        <option value="US">🇺🇸 | United States</option>
        <option value="KR">🇰🇷 | Korea</option>
        <option value="JP">🇯🇵 | Japan</option>
        <option value="CN">🇨🇳 | China</option>
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
  width: 10rem;
  padding: 0.5rem;
  border: 0.0425rem solid ${({ theme }) => theme.color.grey100};
  border-radius: ${({ theme }) => theme.borderRadius.imgCard};
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;

  :hover {
    border-color: ${({ theme }) => theme.color.blueGreen};
    transition: all 0.5s;
  }

  :focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 1px rgba(151, 200, 252, 0.4);
    color: white;
    outline: none;
  }

  > option[value="US"] {
    background-image: url("/images/america.png");
    background-repeat: no-repeat;
  }

  option:checked {
    background-color: ${({ theme }) => theme.color.grey100};
    color: ${({ theme }) => theme.color.white};
  }
`;
