import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 114px;
  background: ${({ theme }) => theme.COLORS.DARK_1000};
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1368px;
  height: 100vh;
  max-height: 104px;
  padding: 28px 123px;

  @media (max-width: 768px) {
    display: none; /* Ocultar quando a largura for até 768px */
  }
`;

export const NavDesk = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 1368px;
  height: 100vh;
  max-height: 114px;
  gap: 32px;
  background: ${({ theme }) => theme.COLORS.DARK_1000};

  > h1 {
    display: flex;
    width: 100%;
    max-width: 300px;
    gap: 10px;

    > strong {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }

  > .ButtonHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 216px;
    gap: 10px;
    height: 56px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);

  }
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
  }

  @media (max-width: 768px) {
    display: none; /* Ocultar quando a largura for até 768px */
  }
`;
export const Section = styled.div`
  display: none; /* Ocultar por padrão */

  @media (max-width: 768px) {
    display: flex; 
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.COLORS.DARK_1000};

    height: 100vh;
    max-height: 114px;
  }
`;

export const NavMob = styled.div`
  display: none; /* Ocultar por padrão */

  @media (max-width: 768px) {
    display: flex; /* Exibir somente em telas menores que 768px */
    align-items: center;
    gap: 15px;
    justify-content: space-around;
    width: 100%;
    max-width: 428px;

    > h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.WHITE};

      > strong {
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 10px;
        color: ${({ theme }) => theme.COLORS.CAKE_100};
      }
    }
    > .iconButton {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: center;
      color: white;
      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: white;

        > .orders {
          display: none;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          
          border-radius: 50%;
        }
        >.orders span{
          position: absolute;
          top: -10px;
          right: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
          border-radius: 50%;
        
      }
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: white;
    }
  }
}
`;
