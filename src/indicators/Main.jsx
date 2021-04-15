import { h } from "preact";

import HistoricalGroup from '../components/HistoricalGroup';
import { useIndicators } from '../hooks/';

const Main = () => {
  const { indicators } = useIndicators()

  return <HistoricalGroup title="No dia de hoje" items={indicators} />;
};

export default Main;
