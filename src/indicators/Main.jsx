import { h } from "preact";

import { AppContext } from "../AppContext";
import { useAppContextConsumer } from "../AppContext";

import HistoricalGroup from '../components/HistoricalGroup';
import { useIndicators } from '../hooks/';

const Main = () => {
  const { labels, styles = {} } = useAppContextConsumer();
  const { indicators, isLoading } = useIndicators({ labels });

  return (
    <div style={styles}>
      <HistoricalGroup isLoading={isLoading} title="No dia de hoje" items={indicators} />
    </div>
  );
};


export default ({ element, ...appSettings }) => {
  if (!appSettings.onSubscribe) appSettings.onSubscribe = () => { };

  return (
    <AppContext config={appSettings}>
      <Main />
    </AppContext>
  );
};