import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  overflow-x: auto;
`;

export const Wallet = styled.span`
  cursor: pointer;
  padding: 4px 50px;
  border-radius: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--white);
  background: var(--gray);

  &:not(:last-child) {
    margin-right: 10px;
  }

  ${({ isActive }) => isActive && css`
    color: var(--white);
    background-color: #0378A6;
  `}
`;