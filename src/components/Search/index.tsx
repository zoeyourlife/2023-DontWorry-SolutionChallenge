import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import styled from "styled-components";

function Search() {
  return (
    <StyledSearch>
      <StyledSearchBar>
        <StyledInput />
        <div>
          <SearchIcon />
        </div>
      </StyledSearchBar>
      <select className="option">
        <option>title</option>
        <option>category</option>
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
const StyledSearchBar = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.grey500};
  width: 70%;
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.input};
  justify-content: flex-end;
`;
