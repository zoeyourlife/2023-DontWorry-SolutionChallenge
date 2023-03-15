import React, { useEffect, useState } from "react";

// CountryDropDownProps 타입 지정
interface ICountryDropDownProps {
  countries: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  countrySelection: Function;
}

const CountryDropDown = ({
  countries,
  countrySelection,
}: ICountryDropDownProps) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (country: string) => {
    countrySelection(country);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <div className={showDropDown ? "dropdown" : "dropdown active"}>
      {countries.map((country, index) => {
        return (
          <p
            key={index}
            onClick={(): void => {
              onClickHandler(country);
            }}
          >
            {country}
          </p>
        );
      })}
    </div>
  );
};

export default CountryDropDown;
