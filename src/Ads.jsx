import { h } from "preact";
import Main from "./ads/Main.jsx";
import { AppContext } from "./AppContext";

export const Ads = ({ element, ...appSettings }) => (
  <AppContext config={appSettings}>
    <Main />
  </AppContext>
);
