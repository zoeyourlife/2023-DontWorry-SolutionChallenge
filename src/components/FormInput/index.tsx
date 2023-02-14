import styled from "styled-components";

interface InputBaseProps {
  type: "password" | "text" | "email";
}

function FormInput({ type }: InputBaseProps) {
  return <StyledFormInput type={type} />;
}

export default FormInput;

const StyledFormInput = styled.input`
  display: flex;
  width: 22rem;
  margin: 0 auto;
  padding: 1rem;
  color: ${({ theme }) => theme.color.white};
  font-size: 18px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.input};
  background-color: ${({ theme }) => theme.color.grey};
  :focus {
    outline: none;
  }
`;
