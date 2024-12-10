import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 114px 1fr 77px;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.COLORS.DARK_200};
`;
