import { h } from "preact";
import Main from "./subscription/Main";
import { AppContext } from "./AppContext";

export const Subscription = ({ element, ...appSettings }) => (
  <AppContext config={appSettings}>
    <Main />
  </AppContext>
);
