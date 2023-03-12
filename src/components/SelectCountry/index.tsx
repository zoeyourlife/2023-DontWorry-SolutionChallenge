import React, { useState } from "react";
import CountryDropDown from "./CountryDropDown";
import styled from "styled-components";

// interface ISelectCountries {
//   label: string;
//   value: number;
// }

// const options = [
//   { value: "korea", label: "KR" },
//   { value: "Japan", label: "JA" },
//   { value: "United States", label: "US" },
//   { value: "China", label: "CN" },
// ];

const SelectCountry: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectCountry, setSelectCountry] = useState<string>("");
  const countries = () => {
    return ["KR, Korea", "US, United States", "CN, China", "JP, Japan"];
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const outFoucsHandler = (e: React.FocusEvent<HTMLButtonElement>): void => {
    if (e.currentTarget === e.target) {
      setShowDropDown(false);
    }
  };

  const countrySelection = (country: string): void => {
    setSelectCountry(country);
  };

  return (
    <>
      <div>
        <div>
          {selectCountry
            ? `You selected ${selectCountry}`
            : "Select Your Country"}
        </div>
      </div>
      <StyledButtonDiv>
        <StyledButton
          className={showDropDown ? "active" : undefined}
          onClick={(): void => toggleDropDown()}
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            outFoucsHandler(e)
          }
        >
          <div>
            {/* {selectCountry ? "Selected: " + selectCountry : "Select ..."} */}
            {selectCountry ? "" + selectCountry : "Select ..."}
          </div>
          {showDropDown && (
            <CountryDropDown
              countries={countries()}
              showDropDown={false}
              toggleDropDown={(): void => toggleDropDown()}
              countrySelection={countrySelection}
            />
          )}
        </StyledButton>
      </StyledButtonDiv>
    </>
  );
};

// function SelectCountry() {
//   // const [isOpenCountry, setIsOpenCountry] = useState<boolean>(false);
//   // const [selectedOption, setSelectedOption] = useState<string>("");

//   // const dropClickCountry = () => {
//   //   setIsOpenCountry(!isOpenCountry);
//   // };

//   // const selectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//   //   const value = e.target.value;
//   //   setSelectedOption(value);
//   // };
//   return (
//     <>
//       {/* <Select
//         placeholder={"countries"}
//         options={options}
//         onChange={selectOnChange}
//       /> */}

//       {/* --------------------------------------- */}
//       {/* <div>
//         <select onChange={selectOnChange}>
//           <option selected disabled>
//             Korea
//           </option>
//           <option value="1">us</option>
//           <option value="2">us</option>
//           <option value="3">us</option>
//           <option value="4">us</option>
//         </select>
//       </div> */}
//       {/* ------------------------------------ */}
//     </>
//   );
// }

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

const StyledButton = styled.button`
  position: relative;
  padding: 0.375rem 0.88rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.grey};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: left;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
  border: 0.125rem solid transparent;
  font-size: 0.85rem;
  line-height: 1.5;
  border-radius: ${({ theme }) => theme.borderRadius.imgCard};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blueGreen};
  }
  .active {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blueGreen};
  }
  .dropdown {
    position: absolute;
    top: 2.375rem;
    left: -0.0625rem;
    border: 0.0625rem solid rgb(197, 197, 197);
    background: ${({ theme }) => theme.color.white};
    padding: 0;
    color: ${({ theme }) => theme.color.blueGreen};
    text-align: left;
    border-radius: 0.25rem;
  }
  .dropdown > p {
    margin: 0;
    padding: 0.375rem 0.88rem;
    border-bottom: 0.0625rem solid ${({ theme }) => theme.color.white};
    min-width: 5rem;
  }
  .dropdown > p:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blueGreen};
  }
  .dropdown > p:last-child {
    border-bottom: 0 none;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute;
  left: 800px; */
`;
