import styled from "styled-components";

export const Container = styled.div`
  width: 444px;
  
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;


  > h1 {
    text-align: flex-start;
    font-size: 24px;
    color: white;
  }

  > .order-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 8px;

    > .pedidos {
      display: flex;
      align-items: center;
      gap: 16px;

      img {
        width: 72px;
        height: 72px;
        border-radius: 8px;
      }

      h3 {
        font-size: 16px;
        margin: 0;
      }

      span {
        font-size: 14px;
        color: white;
      }
    }

    > .delete {
      button {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        color: white;
        border: none;
        border-radius: 4px;
        padding: 8px 12px;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
          background-color: darkred;
        }
      }
    }
  }

  > .total {
    /* Padrão: escondido */
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin: 20px 0;
  }

  > .next-button {
    display: none; /* Padrão: escondido */
    text-align: center;

    button {
      width: 216px;
      padding: 12px;
      background-color: red;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color:${({ theme }) => theme.COLORS.TOMATO_100};
      }
    }
  }

  /* Responsividade para mobile */
  @media (max-width: 768px) {
    width: 100%;
    gap: 12px;
    padding: 16px;

    > .order-container {
      flex-direction: column;
      gap: 10px;

      > .pedidos {
        flex-direction: column;
        align-items: center;

        img {
          width: 64px;
          height: 64px;
        }

        h3 {
          font-size: 14px;
        }

        span {
          font-size: 12px;
        }
      }

      > .delete {
        button {
          padding: 6px 10px;
        }
      }
    }

    > .total {
      display: block; /* Exibe o total */
    }

    > .next-button {
      display: block; /* Exibe o botão */
    }
  }

  @media (max-height: 656px) {
     /* Ajusta para a altura desejada */
    overflow-y: auto; /* Adiciona rolagem para evitar cortes */
  }
`;
