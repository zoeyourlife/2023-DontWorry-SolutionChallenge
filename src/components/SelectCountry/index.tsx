import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { API_BASED_URL } from "src/constants/apiUrl";
// import { ICountryHelp } from "src/pages/DontWorry/Help";
import styled from "styled-components";

interface ICountryHelp {
  country_name: string;
  number: string | number;
  summary: string;
}

function SelectCountry() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<String>("");
  const [country, setCountry] = useState<String>("");
  const [helpInform, setHelpInform] = useState<ICountryHelp[]>([]);

  const selectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCountry(value);
    setCountry(value);
  };

  const submitCountry = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    {
      await axios
        .get(`${API_BASED_URL}/help/${country}`, {
          params: {
            name: "country",
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          // 각 나라 헬프 정보 출력 확인.
          console.log(res.data[0]);

          // 배열타입으로 인터페이스에 res.data 정보 담고 props 형태로 보내줄려는 방법?
          // 이게 되나?
          setHelpInform(res.data);
          console.log(setHelpInform);

          // router.push("/DontWorry/Help");
          // 스토리지에 저장해서 갖고오는 방법? 객체가 [Object object]로 표시됨.
          // sessionStorage.setItem("countryHelp", res.data);
        })
        .catch((err) => {
          console.log(err);
          alert("잘못된 페이지");
        });
    }
  };

  return (
    <StyledSelectDiv>
      <StyledSelect onChange={selectChange} defaultValue={"country" || ""}>
        <option value="country" disabled>
          Choose Country ...
        </option>
        <option value="USA">🇺🇸 | United States</option>
        <option value="KOREA">🇰🇷 | Korea</option>
        <option value="JAPAN">🇯🇵 | Japan</option>
        <option value="CHINA">🇨🇳 | China</option>
      </StyledSelect>
      {selectedCountry && <h2>{selectedCountry}</h2>}
      {/* <form onSubmit={submitCountry}>
        <button type="submit">선택 나라 헬프 페이지 이동</button>
      </form> */}
    </StyledSelectDiv>
  );
}

export default SelectCountry;

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
