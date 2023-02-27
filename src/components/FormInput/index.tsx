import { ChangeEvent } from "react";
import styled from "styled-components";

interface InputBaseProps {
  type: "password" | "text" | "email";
  id?: "Password" | "ID" | "Email";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

interface LabelProps {
  placeholder: "Password *" | "ID *" | "Email *";
}

function FormInput(
  { type, id, onChange }: InputBaseProps,
  { placeholder }: LabelProps,
) {
  return (
    <StyledWrapper>
      <StyledFormInput type={type} id={id} onChange={onChange} />
      <label htmlFor={id}>
        <span>{id}</span>
      </label>
    </StyledWrapper>
  );
}

export default FormInput;

const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const StyledFormInput = styled.input`
  display: flex;
  width: 100%;
  padding: 1rem;
  color: ${({ theme }) => theme.color.white};
  font-size: 18px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.input};
  background-color: ${({ theme }) => theme.color.grey};
  ::placeholder {
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.color.grey100};
  }
  :placeholder-shown:not(:focus) + * {
    font-size: 0.9rem;
    opacity: 1;
    color: ${({ theme }) => theme.color.grey500};
  }

  /* select:placeholder-shown:not(:focus) + * */

  :focus {
    outline: none;
  }

  + label {
    display: block;
    position: absolute;
    text-align: left;
    font-weight: bold;
    font-size: 0.7rem;
    padding: 1rem 0 1rem 0;
    color: ${({ theme }) => theme.color.grey100};
    margin-top: 0.7rem;
    transition: all 0.25s;
    transform: translateY(-240%);
  }

  :focus + label {
    color: ${({ theme }) => theme.color.white};
    transform: translateY(-245%);
    font-size: 0.72rem;
  }
`;
