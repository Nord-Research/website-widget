import { h } from "preact";

import { AppContext } from "../AppContext";
import { useAppContextConsumer } from "../AppContext";

import HistoricalGroup from '../components/HistoricalGroup';
import { useEquities } from '../hooks/';

const Main = () => {
  const { styles = {} } = useAppContextConsumer();
  const { highs, losses } = useEquities();

  return (
    <div style={styles}>
      <HistoricalGroup title="Maiores Altas" items={highs} />
      <HistoricalGroup title="Maiores baixas" items={losses} />
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