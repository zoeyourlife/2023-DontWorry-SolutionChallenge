import React, { useState } from "react";

interface ISelectCountries{
    label: string;
    value: number;
}

function SelectCountry() {
    const [isShowOptions, setIsShowOptions] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>("");

    const selectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedOption(value);
    }

    return (
        <div>
            <select onChange={selectOnChange}>
                <option selected disabled>
                    Choose one
                </option>
                <option value="">o1</option>
                <option value="">o1</option>
                <option value="">o1</option>
                <option value="">o1</option>
                <option value="">o1</option>
            </select>
        </div>
    )
        
}
        

export default SelectCountry;