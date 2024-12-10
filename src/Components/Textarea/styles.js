import styled from "styled-components";

export const Container = styled.textarea`
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: white;

  border: none;
  resize: none;

  border-radius: 7px;
  margin-bottom: 11px;
  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  @media (max-width: 768px) {
    max-width: 335px;
  }
`;
