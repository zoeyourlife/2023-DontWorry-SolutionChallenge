import { useRouter } from "next/router";
import styled from "styled-components";

interface IProps {
  pageName: string;
}

function SelectCountry({ pageName }: IProps) {
  const router = useRouter();

  const country = [
    { countryName: "usa", title: "🇺🇸 | United States" },
    { countryName: "korea", title: "🇰🇷 | Korea" },
    { countryName: "japan", title: "🇯🇵 | Japan" },
    { countryName: "china", title: "🇨🇳 | China" },
  ];

  return (
    <StyledWrapper>
      <StyledSelect
        onChange={(e) => {
          router.push(`/DontWorry/${pageName}/${e.target.value}`);
        }}
        defaultValue={"country" || ""}
      >
        <option value="country" disabled>
          Choose Country ...
        </option>
        {country.map((data, i) => (
          <option value={data.countryName} key={i}>
            {data.title}
          </option>
        ))}
      </StyledSelect>
    </StyledWrapper>
  );
}

export default SelectCountry;

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledSelect = styled.select`
  max-width: 8rem;
  padding: 0.5rem;

  border: 0.0425rem solid ${({ theme }) => theme.color.grey100};
  border-radius: ${({ theme }) => theme.borderRadius.imgCard};

  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.white};

  font-size: 0.75rem;
  cursor: pointer;

  :hover {
    border-color: ${({ theme }) => theme.color.blueGreen};
    transition: all 0.5s;
  }

  :focus {
    border-color: ${({ theme }) => theme.color.grey100};
    box-shadow: 0 0 1px 1px rgba(151, 200, 252, 0.4);
    color: ${({ theme }) => theme.color.white};
    outline: none;
  }

  option:checked {
    background-color: ${({ theme }) => theme.color.grey100};
    color: ${({ theme }) => theme.color.white};
  }
`;
