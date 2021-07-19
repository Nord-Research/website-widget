import { h } from "preact";

import { AppContext } from "../AppContext";
import Table from "./components/Table";

export default ({ element, ...appSettings }) => (
  <AppContext config={appSettings}>
    <Table />
  </AppContext>
);
