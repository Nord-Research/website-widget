import { h } from "preact";
import Main from "./leads/Main";
import { AppContext } from "./AppContext";

export const Leads = ({ element, ...appSettings }) => (
  <AppContext config={appSettings}>
    <Main />
  </AppContext>
);
