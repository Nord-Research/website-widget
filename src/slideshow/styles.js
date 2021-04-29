import styled, { keyframes, css } from 'styled-components';


const scrollAnimation = ({ width, imagesCount }) => keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-${width}px * ${imagesCount}));
  }
`;

export const Slider = styled.div`
  background: transparent;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::after, &::before {
    background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
    content: "";
    height: 100%;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
`;

export const SlideTrack = styled.div`
  display: flex;
  ${({ width, imagesCount, duration }) => css`
    animation: ${scrollAnimation({ width, imagesCount })} linear infinite;
    animation-duration: ${duration};
    width: calc(${width}px * ${imagesCount * 2});
  `}
`