import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.p`
  display: inline-block;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;

  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }

  ${({ status }) => {
    switch (status) {
      case 'positive':
        return css`
          color: var(--green);
        `;
      case 'negative':
        return css`
          color: var(--red);
        `;
      default:
        return css`
          color: var(--light-black);
        `;
    }
  }};
`;
