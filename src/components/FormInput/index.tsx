import styled from "styled-components";

interface InputBaseProps {
  type: "password" | "text" | "email";
  id: "Password" | "ID" | "Email";
  value : string;
}

interface LabelProps {
  placeholder: "Password *" | "ID *" | "Email *";
}

function FormInput({ type, id }: InputBaseProps, { placeholder }: LabelProps) {
  return (
    <div>
      <StyledFormInput type={type} id={id} />
      <StyledInputTitleLabel htmlFor={id}>
        <span>{id}</span>
      </StyledInputTitleLabel>
    </div>
  );
}

export default FormInput;

const StyledFormInput = styled.input`
  display: flex;
  width: 27rem;
  margin: 0 auto;
  padding: 1.5rem;
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
    margin-top: 0.7rem;
    color: ${({ theme }) => theme.color.grey100};
    transition: all 0.25s;
    transform: translateY(-190%);
  }

  :focus + label {
    color: ${({ theme }) => theme.color.white};
    transform: translateY(-195%);
    font-size: 0.72rem;
  }
`;

const StyledInputTitleLabel = styled.label`
  padding: 1rem 0 1rem 2.4rem;
  color: ${({ theme }) => theme.color.grey100};
`;
