import { h } from "preact";

import { AppContext } from "../AppContext";
import { useAppContextConsumer } from "../AppContext";

import HistoricalGroup from '../components/HistoricalGroup';
import { useEquities } from '../hooks/';

const Main = () => {
  const { styles = {} } = useAppContextConsumer();
  const { equities, isLoading, isEmpty } = useEquities();

  if (isEmpty) return null;

  return (
    <div style={styles}>
      <HistoricalGroup
        isLoading={isLoading}
        title="Maiores Altas"
        items={equities.highs}
      />
      <HistoricalGroup
        isLoading={isLoading}
        title="Maiores baixas"
        items={equities.losses}
      />
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