import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 114px 1fr 77px;
  grid-template-columns: 1fr;
  height: auto;
  overflow: auto;
  min-height: 100vh;
`;

export const Nav = styled.div`
  width: 100%;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.COLORS.DARK_100};
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    max-width: 475px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  > .refs {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding: 0 250px;

    @media (max-width: 768px) {
      display: flex;
      align-items: flex-start;
      width: 100%;
      max-width: 475px;
      padding: 0 25px;
    }
  }
`;
export const Div = styled.div`
  width: 1122px;
  max-width: 1000px;
  max-height: 260px;
  background: ${({ theme }) => theme.COLORS.DARK_1000};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14.375rem 4.81rem 4.25rem 4.81rem;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 6px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px; /* Suaviza os cantos */

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-width: 376px;
    max-height: 120px;

    margin: 2rem 1rem;
  }

  > .imgs {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 0;

    img {
      max-width: 400px;
      width: 100%;
      height: auto;

      @media (max-width: 768px) {
        max-width: 300px;
      }
    }
  }

  > div {
    padding: 0 1rem;

    h2 {
      font-size: 1.5rem;

      @media (max-width: 768px) {
        text-align: center;
        font-size: 1.2rem;
      }
    }

    p {
      font-size: 1rem;
      text-align: center;

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
`;

export const Section = styled.div`
  display: flex;
  overflow: hidden; /* Impede que os itens extrapolem o container */
  position: relative;
  width: 100%;
  max-width: 1122px;
  margin-bottom: 5rem;
  height: auto;
  cursor: grab;

  .carousel-inner {
    display: flex;
    gap: 20px; /* Espaço entre os produtos */
  }
  position: relative; /* Necessário para os pseudo-elementos */

  /* Esfumaçamento nas laterais */
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px; /* Largura da faixa de esfumaçamento */
    pointer-events: none; /* Não interfere na interação do usuário */
    z-index: 1;
  }

  /* Esfumaçamento à esquerda */
  &::before {
    left: 0;
    background: linear-gradient(to right, rgba(25, 34, 39, 1), transparent);
  }

  /* Esfumaçamento à direita */
  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(25, 34, 39, 1), transparent);
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const Footer = styled.div`
  width: 100%;
`;
