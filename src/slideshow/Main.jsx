import { h } from "preact";
import './main.css';

import { AppContext, useAppContextConsumer } from "../AppContext";

const Main = () => {
  const { images = [] } = useAppContextConsumer();

  console.log(images);

  return (
    <div class="slider">
      <div class="slide-track">
        {images.map(url => (
          <div class="slide">
            <img src={url} height="100" width="250" alt="" />
          </div>
        ))}
        {images.map(url => (
          <div class="slide">
            <img src={url} height="100" width="250" alt="" />
          </div>
        ))}
      </div>
    </div>
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