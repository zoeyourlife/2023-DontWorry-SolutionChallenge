import styled from "styled-components";

interface IInputProps {
  placeholder?: string;
}

function Input({ placeholder }: IInputProps) {
  return <StyledInput placeholder={placeholder} required={true} />;
}

export default Input;

const StyledInput = styled.input`
  border: none;

  width: 100%;
  padding: 0.875rem 1.25rem;

  border-radius: ${({ theme }) => theme.borderRadius.imgCard};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.grey500};
  letter-spacing: 0.1px;

  ::placeholder {
    color: ${({ theme }) => theme.color.white};
    opacity: 0.6;
  }

  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.blueGreen};
  }
`;
