import styled from "styled-components";

export const Container = styled.div`
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 530px;
  margin: 0 auto;
  
  h1{
    padding: 1rem;
  }

  @media (max-width: 768px) { /* Responsivo para telas menores */
    width: 100%; /* Ajusta a largura para preencher a tela */
    padding: 0 2rem;
    font-size: 1rem;
  }
`;

export const Main = styled.div`
  width: 530px;
  height: 100vh;
  max-height: 420px;
  margin: 0 auto;
  border: solid 1px #ccc;
  

  .Container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px; /* Espaçamento entre os itens */
    width: 100%;

    > .pix, > .card {
      border: solid 1px #ccc;
      flex: 1; /* Divide o espaço igualmente */
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      gap: 10px;
      font-size: 1.5re;
      border-radius: 5px; /* Arredondamento para melhorar a aparência */
    }
  }

  > .ContainerTwo {
    width: 270px;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px #ccc;
    margin: 0 auto;
    margin-top: 45px;
  }

  /* Responsividade */
  @media (max-width: 768px) { /* Para telas de 350px */
    width: 100%;
    height: 460px;

    .Container {
      flex-direction: row; /* Mantém Pix e Cartão lado a lado */
      gap: 5px; /* Reduz o espaço entre os itens */

      > .pix, > .card {
        padding: 0.5rem; /* Reduz o tamanho dos botões */
        font-size: 18px; /* Ajusta o tamanho da fonte */
      }
    }

    > .ContainerTwo {
      width: 200px;
      height: 200px;
      margin-top: 20px; /* Ajusta o espaço superior */
    }
  }
`;


