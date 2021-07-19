import styled, { css } from 'styled-components';

export const Label = styled.p`
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  &:before {
    margin-right: 10px;
    display: inline-block;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  @media (min-width: 1024px) {
    font-size: 19px;
    line-height: 28px;
  }

  ${({ status }) => {
    switch (status) {
      case 'buy':
        return css`
          color: var(--green);
          &::before {
            background: var(--green);
          }
        `;
      case 'hold':
        return css`
          color: var(--yellow);
          &::before {
            background: var(--yellow);
          }
        `;
      default:
        return css`
          color: var(--light-black);
          &::before {
            background: var(--light-black);
          }
      `;
    }
  }}
`;