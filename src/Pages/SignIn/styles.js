import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.DARK_700};

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: red;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    > strong {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }
  @media (max-width: 768px) {
    > h1 {
      /* margin-top: 20rem; */
      text-align: start;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.form`
  background: ${({ theme }) => theme.COLORS.DARK_1000};
  max-width: 476px;
  max-height: 540px;
  padding: 54px 32px;
  border-radius: 7px;

  min-width: 370px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 24px;
    line-height: 32px;
  }

  > a {
    font-size: 16px;
    margin-top: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }
  @media (max-width: 768px) {
    background: none;
  }
`;
