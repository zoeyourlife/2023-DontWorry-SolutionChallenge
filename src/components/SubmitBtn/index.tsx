import styled from "styled-components";

interface SubmitBtnProps {
  type: "submit" | "reset" | "button";
  name: string;
}

function SubmitBtn({ type, name }: SubmitBtnProps) {
  return (
    <StyledSubmitBtn type={type}>
      <StyledSubmitP>{name}</StyledSubmitP>
    </StyledSubmitBtn>
  );
}

export default SubmitBtn;

const StyledSubmitBtn = styled.button`
  display: flex;
  width: 75%;
  padding: 0.8rem;
  margin: 0 auto;
  margin-top: 3rem;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.125rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.button};
  background: ${({ theme }) => theme.color.blueGreen};
`;

const StyledSubmitP = styled.p`
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.white};
  margin: 0 auto;
`;
