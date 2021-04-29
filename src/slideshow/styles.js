import styled, { keyframes, css } from "styled-components";

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
`;

export const SlideTrack = styled.div`
  display: flex;
  ${({ width, imagesCount, duration }) => css`
    animation: ${scrollAnimation({ width, imagesCount })} linear infinite;
    animation-duration: ${duration};
    width: calc(${width}px * ${imagesCount * 2});
  `}
`;
