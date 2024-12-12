import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.DARK_200};
  padding: 2rem;
  margin: 0 auto;
  height: 100%;
  gap: 2rem;
  width: 100%;

  .back {
    align-self: flex-start;
    margin-bottom: 2rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 8px;

      &:hover {
        color: ${({ theme }) => theme.COLORS.TOMATO_100};
      }
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width:930px;
    margin: 0 auto;
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 264px;
    height: 264px;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 390px;
      height: 390px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;

  input {
    background: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    border-radius: 8px;
    padding: 0.5rem;
    text-align: center;
    width: 100px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
    }
  }
`;

export const Prices = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .counter {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-decoration: none;
      font-size: 1.5rem;

      &:hover {
        color: ${({ theme }) => theme.COLORS.TOMATO_100};
      }
    }

    span {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`;
