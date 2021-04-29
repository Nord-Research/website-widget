import { h } from "preact";

import { AppContext, useAppContextConsumer } from "../AppContext";

import * as Styled from './styles';

const Main = () => {
  const { images = [], width = 250, duration = '10s' } = useAppContextConsumer();
  const imagesCount = images.length ?? 0;

  return (
    <Styled.Slider>
      <Styled.SlideTrack
        width={width}
        imagesCount={imagesCount}
        duration={duration}
      >
        {images.map(url => (
          <div style={{ width: `${width}px` }}>
            <img src={url} width={width} alt="" />
          </div>
        ))}
        {images.map(url => (
          <div style={{ width: `${width}px` }}>
            <img src={url} width={width} alt="" />
          </div>
        ))}
      </Styled.SlideTrack>
    </Styled.Slider>
  )
};

export default ({ element, ...appSettings }) => {
  if (!appSettings.onSubscribe) appSettings.onSubscribe = () => { };

  return (
    <AppContext config={appSettings}>
      <Main />
    </AppContext>
  );
};