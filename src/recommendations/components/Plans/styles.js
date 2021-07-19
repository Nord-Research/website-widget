import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  overflow-x: auto;
  flex-wrap: nowrap;
`;

export const Wallet = styled.div`
  cursor: pointer;
  padding: 4px 50px;
  border-radius: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white);
  background: var(--gray);
  min-width: max-content;

  &:not(:last-child) {
    margin-right: 10px;
  }

  ${({ isActive }) => isActive && css`
    color: var(--white);
    background-color: #0378A6;
  `}
`;

export const LoadingWallet = styled.div`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;