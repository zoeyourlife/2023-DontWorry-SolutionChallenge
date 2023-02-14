import styled from "styled-components";

function FormInput() {
  return (
    <>
      <StyledFormInput type="text" />
    </>
  );
}

export default FormInput;

const StyledFormInput = styled.input`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 16px;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.input};
  background-color: ${({ theme }) => theme.color.grey};
  :focus {
    outline: none;
  }
`;
