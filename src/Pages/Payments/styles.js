import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  

  >.main {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    @media (min-width: 768px){
      height:78vh ;
    }
    
  }
`;
export const PayContainer = styled.div`
  @media (max-width: 768px) {
    display: none; /* Esse componente desaparecerá em telas pequenas */
  }
`;