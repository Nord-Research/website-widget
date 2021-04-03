import { h } from "preact";
import Main from "./priceHistory/Main";
import { AppContext } from "./AppContext";

export const PriceHistory = ({ element, ...appSettings }) => (
  <AppContext config={appSettings}>
    <Main />
  </AppContext>
);