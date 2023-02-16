import styled from "styled-components";

interface SubmitBtnProps {
  type: "submit" | "reset" | "button";
  name: string;
}

function SubmitBtn({ type, name }: SubmitBtnProps) {
  return (
    <StyledSubmitBtn type={type}>
      {/* StyledSubmitP 태그 사이에 각자 들어갈 내용이긴 한데 ex) Submit, Reset, ... */}
      {/* 따로 컴포넌트 구성을 해야될 것 같은데? */}
      <StyledSubmitP>{name}</StyledSubmitP>
    </StyledSubmitBtn>
  );
}

export default SubmitBtn;

const StyledSubmitBtn = styled.button`
  display: flex;
  width: 25rem;
  padding: 0.8rem;
  height: 2rem;
  margin: 0 auto;
  margin-top: 3rem;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.125rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.button};
  background: ${({ theme }) => theme.color.blueGreen};
`;

const StyledSubmitP = styled.p`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.white};
  margin: 0 auto;
`;
