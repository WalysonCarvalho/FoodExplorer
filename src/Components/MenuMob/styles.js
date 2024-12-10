import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 428px;
  height: 100vh;
  max-height: 820px;

  background: ${({ theme }) => theme.COLORS.DARK_100};

  margin: 0 auto;

  > footer {
    display: flex;
    align-items: center;
    height: 170px;
    justify-content: space-between; /* Mantém espaçamento no desktop */
    width: 100%;
    padding: 0 20px;
    gap: 40px; /* Espaço entre os elementos no desktop */

    .footerOne {
      p {
        display: flex;
        align-items: center;
        gap: 10px; /* Espaço entre ícone e texto */
        strong {
          color: ${({ theme }) => theme.COLORS.CAKE_100};
        }
      }
    }

    .footerTwo {
      max-width: 240px;
    }

    /* Responsivo para telas menores (mobile) */
    @media (max-width: 768px) {
      justify-content: center; /* Alinhamento mais próximo */
      gap: 10px; /* Reduz espaço entre os itens */
      height: 77px;

      .footerOne,
      .footerTwo {
        text-align: center;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 428px;
  height: 114px;
  background: ${({ theme }) => theme.COLORS.DARK_1000};
  padding: 1rem;
  margin-bottom: 36px;

  > .menu {
    width: 100%;
    display: flex;

    a {
      text-decoration: none;
      color: white;
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  max-width: 372px;
  height: 600px;
  max-height: 677px;
  background: ${({ theme }) => theme.COLORS.DARK_100};

  justify-content: center;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  margin: 0 auto;

  > .search {
    width: 370px;
    height: 48px;
    margin-bottom: 36px;
  }

  > .text {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding-bottom: 1rem;

    border-bottom: 1px solid white;

    a{
      text-decoration: none;
      color: white;
    }
  }
`;
