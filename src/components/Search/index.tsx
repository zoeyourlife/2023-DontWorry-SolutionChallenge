import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import React, { ChangeEvent, useState, FormEvent } from "react";
import { API_BASED_URL } from "src/constants/apiUrl";
import styled from "styled-components";

function Search({ searchSet }: any) {
  const [searchData, setSearchData] = useState<string>("");
  const [searchOption, setSearchOption] = useState<string>("title");
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
    console.log(searchData);
  };
  const onChangeSearchOption = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setSearchOption(e.target.value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchData);
    axios
      .get(`${API_BASED_URL}/main/${searchOption}/${searchData}`)
      .then((res) => {
        console.log(res.data);
        searchSet(res.data);
      })
      .catch((e) => {
        console.log(e);

        alert(
          "Search Err " +
            e.response.status +
            "\n No matching posts were found. ",
        );
      });
  };
  return (
    <StyledSearch>
      <StyledSearchBar onSubmit={onSubmit}>
        <StyledInput onChange={onChangeSearch} value={searchData} />
        <button type="submit">
          <SearchIcon />
        </button>
      </StyledSearchBar>
      <select className="option" onChange={onChangeSearchOption}>
        <option value="title">title</option>
        <option value="category">category</option>
      </select>
    </StyledSearch>
  );
}

export default Search;

const StyledInput = styled.input`
  all: unset;
  width: 100%;
`;

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  gap: 1.25rem;
  width: 100%;
  padding-left: 1.25rem;
  height: 3.6rem;
  .option {
    background-color: ${({ theme }) => theme.color.grey500};
    border-radius: ${({ theme }) => theme.borderRadius.input};
    width: 20%;
    color: ${({ theme }) => theme.color.white};
    font-size: 1rem;
    select {
      color: ${({ theme }) => theme.color.white};
    }
  }
`;
const StyledSearchBar = styled.form`
  display: flex;
  background-color: ${({ theme }) => theme.color.grey500};
  width: 70%;
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.input};
  justify-content: flex-end;
`;
