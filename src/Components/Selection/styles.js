import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Article = styled.article`
  background: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 224px;
  padding: 1rem;
  text-align: center;
  overflow: hidden;

  > .header {
    > .heart-client {
      display: flex;
      justify-content: flex-end;
      top: 16px;
      right: 16px;

      a {
        display: flex;
        justify-content: flex-end;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-decoration: none; /* Removemos o sublinhado */
      }
    }
  }

  > .imgs {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    img {
      width: 176px;
      height: 176px;
      border-radius: 50%;
    }
  }

  > .text {
    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  > .clash {
    margin-top: 0.5rem;

    span {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  > .prices {
    display: flex;
    flex-direction: column; /* Coluna para organizar melhor */
    align-items: center;
    margin-top: 1rem;
    gap: 0.5rem;

    > .quantity {
      display: flex; /* Flexbox para os botões e o número ficarem na horizontal */
      align-items: center;
      justify-content: center;
      gap: 16px; /* Gap de 16px entre os elementos */

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        color: ${({ theme }) => theme.COLORS.WHITE}; /* Cor branca */
        cursor: pointer;
        text-decoration: none; /* Removemos o sublinhado */
        transition: color 0.2s;

        &:hover {
          color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
      }

      span {
        font-size: 1.25rem;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.WHITE}; /* Cor branca */
      }
    }

    button {
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
`;

