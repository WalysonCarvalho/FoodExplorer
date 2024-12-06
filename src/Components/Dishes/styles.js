import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: red;
  max-width: 316px;
  max-height: 677px;
  margin: 0 auto;
  
`;
export const Section = styled.section`
  background: ${({ theme }) => theme.COLORS.DARK_200};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > .prices {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
    margin-bottom: 3rem;

    > .price {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      gap: 10px;
      font-size: 24px;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 8px;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 158px;
      max-width: 188px;
      height: 36px;
      padding: 10px 43px 10px 43px;
      gap: 5px;

      background: ${({ theme }) => theme.COLORS.TOMATO_100};
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #d62828;
      }
    }
  }

  > .text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 16px;
    text-align: center;
    gap: 1rem;
  }

  > .back {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 1.5rem;
    padding-left: 25px;
    margin-top: 2rem;

    > a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }

  > .img-food {
    img {
      width: 264px;
      height: 264px;
      margin: 16px 26px 16px;
    }

    > .ingredients {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;
export const Input = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 5px;
  margin-bottom: 48p;

  > input {
    display: flex;
    background: #192227; /* Cor de fundo */
    border: none; /* Remove a borda padrão */
    border-radius: 5px; /* Bordas arredondadas */
    color: white; /* Cor do texto */
    font-size: 1rem; /* Tamanho da fonte */
    padding: 3px; /* Espaçamento interno */
    width: auto; /* Ajusta dinamicamente ao conteúdo */
    max-width: 85px; /* Largura mínima */
    text-align: center; /* Centraliza o texto */

    &::placeholder {
      color: white; /* Placeholder com cor branca */
    }
  }
`;
