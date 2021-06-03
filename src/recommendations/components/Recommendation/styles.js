import styled from 'styled-components';

export const Label = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(--green);

  &:before {
    margin-right: 10px;
    display: inline-block;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--green);
  }
`;