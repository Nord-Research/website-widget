import { h } from "preact";

import { AppContext } from "../AppContext";

export default ({ element, ...appSettings }) => {
  return (
    <AppContext config={appSettings}>
      <h1>OnLine</h1>
    </AppContext>
  );
};