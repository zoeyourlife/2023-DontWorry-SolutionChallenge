import styled from "styled-components";

interface Props {
  category: string | string[] | undefined;
}

function Tag() {
  return (
    <StyledTagShape>
      <StyledTag>태그명</StyledTag>
    </StyledTagShape>
  );
}

export default Tag;

const StyledTagShape = styled.div`
  display: flex;
  align-items: center;

  width: auto;
  height: 1.46rem;
  padding: 0rem 0.65rem;
  margin-right: 0.13rem;

  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: ${({ theme }) => theme.borderRadius.button};
  cursor: pointer;
`;

const StyledTag = styled.span`
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;
