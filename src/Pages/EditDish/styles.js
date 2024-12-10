import styled from "styled-components";

export const Container = styled.div`
  .header {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 100vh; /* Permite que o conteúdo cresça além da altura da viewport */
    display: flex;
    flex-direction: column;
    overflow-y: auto; /* Adiciona o scroll quando necessário */
    background: ${({ theme }) => theme.COLORS.DARK_900};

    .header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      padding: 16px 24px;

      .back {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

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

      .text {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: bold;
        text-align: center;
        width: 100%;
        margin-bottom: 24px;
      }
    }
  }
`;

export const Menu = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 24px;

    background: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 16px;

    > .inputs {
      width: 100%;
      max-width: 365px;
      display: flex;
      flex-direction: column;
      gap: 13px;
      outline: none;

      span {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1rem;
        margin-top: 13px;
        gap: 12px;
      }
      .namedish,
      .category {
        margin-bottom: 8px; /* Aplica margem específica */
      }

      .image-upload {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        input[type="file"] {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }

        label {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          background: ${({ theme }) => theme.COLORS.DARK_800};
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 1rem;
          cursor: pointer;

          span {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }

      input,
      select,
      textarea {
        padding: 12px 16px;
        border-radius: 8px;
        background: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1rem;
        border: 1px solid ${({ theme }) => theme.COLORS.DARK_700};
        transition: border-color 0.3s;
      }

      select {
        appearance: none;
        cursor: pointer;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23FFFFFF'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a 1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 16px center;
        background-size: 1rem;
        width: 100%; /* Para alinhar com os outros inputs */
        gap: 10px;

        span {
          margin-top: 13px;
          margin-bottom: 13px;
        }
      }

      textarea {
        resize: vertical;
        min-height: 100px;
      }
    }

    > .buttonMenu {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      width: 100%;
      max-width: 365px;
      margin-top: 24px;
      margin-bottom: 24px;

      button {
        width: 172px; /* Largura dos botões */
        height: 48px; /* Altura dos botões */
        border-radius: 8px;
        font-size: 14px;
        cursor: pointer;
      }
      .del {
        background: black;
        color: white;
      }
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: ${({ theme }) => theme.COLORS.DARK_900};

  .header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 16px 24px;

    .back {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      margin-left: 10rem;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        gap: 8px;

        &:hover {
          color: ${({ theme }) => theme.COLORS.CAKE_100};
        }
      }
    }

    .text {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: bold;
      text-align: center;
      width: 100%;
      margin-bottom: 24px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuDesk = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 64px;
  margin: 0 auto;

  background: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: 16px;

  .ContainerOne,
  .ContainerTwo,
  .ContainerThree {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 1120px;
    margin-bottom: 24px;
    gap: 16px;
  }

  .ContainerOne {
    display: flex;
    gap: 16px;

    .inputs {
      display: flex;
      flex-direction: column;
      flex: 1;

      &:nth-child(1) {
        max-width: 230px; /* Input de Imagem */
      }

      &:nth-child(2) {
        max-width: 460px;
        height: 50px; /* Input Nome do Prato */
      }

      &:nth-child(3) {
        max-width: 360px; /* Select Categoria */
      }

      span {
        margin-bottom: 8px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1rem;
      }

      .image-upload {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 70px;
        border-radius: 8px;
        background: ${({ theme }) => theme.COLORS.DARK_800};

        input[type="file"] {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }

        label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          background: ${({ theme }) => theme.COLORS.DARK_800};
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background: ${({ theme }) => theme.COLORS.CAKE_100};
          }
          span {
            display: flex;
            align-items: flex-end; /* Alinha os itens ao final */
            gap: 16px; /* Espaçamento entre os itens */
          }
        }
      }
    }
  }

  .ContainerTwo {
    .inputs:nth-child(1) {
      flex: 0 0 830px;
    }
    .inputs:nth-child(2) {
      flex: 0 0 250px;
    }
  }

  .ContainerThree {
    width: 1120px;
    height: 200px;

    .inputs {
      flex: 1;
      height: 100%;
    }

    textarea {
      height: 100%;
      width: 100%;
      resize: none;
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;

    span {
      margin-bottom: 8px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1rem;
    }

    input,
    select,
    textarea {
      width: 97%;
      padding: 12px 16px;
      border-radius: 8px;
      background: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1rem;
      transition: border-color 0.3s;

      &:focus {
        border-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      }
    }

    select {
      appearance: none;
      cursor: pointer;
    }
  }

  .buttonMenu {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 5rem;
    justify-content: space-around;

    button {
      max-width: 200px;
      padding: 12px 16px;
      border-radius: 8px;
    }

    .del {
      background: black;
      color: white;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
