import React, { useEffect, useState } from "react";

// CountryDropDownProps 타입 지정
type CountryDropDownProps = {
  countries: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  countrySelection: Function;
};

const CountryDropDown: React.FC<CountryDropDownProps> = ({
  countries,
  countrySelection,
}: CountryDropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (country: string): void => {
    countrySelection(country);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? "dropdown" : "dropdown active"}>
        {countries.map((country: string, index: number): JSX.Element => {
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
    </>
  );
};

export default CountryDropDown;
