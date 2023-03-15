import React, { useState } from "react";
import CountryDropDown from "./CountryDropDown";
import styled from "styled-components";

function SelectCountry() {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectCountry, setSelectCountry] = useState<string>("");
  const countries = () => {
    return ["KR, Korea", "US, United States", "CN, China", "JP, Japan"];
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const outFoucsHandler = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (e.currentTarget === e.target) {
      setShowDropDown(false);
    }
  };

  const countrySelection = (country: string) => {
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
              toggleDropDown={() => toggleDropDown()}
              countrySelection={countrySelection}
            />
          )}
        </StyledButton>
      </StyledButtonDiv>
    </>
  );
}

export default SelectCountry;

const StyledButton = styled.button`
  position: relative;
  padding: 0.375rem 0.88rem;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  -webkit-user-select: none;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.grey};

  font-size: 0.85rem;
  text-align: left;
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  border: 0.125rem solid transparent;
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
`;
