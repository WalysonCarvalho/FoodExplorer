import styled from 'styled-components';

export const Container = styled.button`
  
  max-width:476px;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
  
  height: 46px;
  border: 0;
  padding: 0 16px;  
  border-radius: 7px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: .5;
  }
`;