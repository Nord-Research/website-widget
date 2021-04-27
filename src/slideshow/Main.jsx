import { h } from "preact";

import { AppContext } from "../AppContext";

const Main = () => <h1>Slideshow</h1>;

export default ({ element, ...appSettings }) => {
  if (!appSettings.onSubscribe) appSettings.onSubscribe = () => { };

  return (
    <AppContext config={appSettings}>
      <Main />
    </AppContext>
  );
};