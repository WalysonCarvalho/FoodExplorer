import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 77px;
  background: ${({ theme }) => theme.COLORS.DARK_1000};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.footer`
  display: flex;
  align-items: center;
  height: 77px;
  justify-content: space-around; /* Mantém espaçamento no desktop */
  width: 100%;
  padding: 0 20px;
  gap: 40px; /* Espaço entre os elementos no desktop */
  font-size: 1rem;

  .footerOne {
    p {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
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
`;
