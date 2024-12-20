import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  border-radius: 7px;
  
  > input, 
  >select {
    height: 46px;
    width: 100%;

    padding: 12px;
    padding-left: 7px;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    >option{
      background-color: ${({ theme }) => theme.COLORS.DARK_800};

    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }
  
  > svg {
    margin-left: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }
`;