import { h } from "preact";

import HistoricalGroup from '../components/HistoricalGroup';
import { useAppContextConsumer } from "../AppContext";
import { useEquities } from '../hooks/';

const Main = () => {
  const { equities } = useAppContextConsumer();
  const { highs, losses } = useEquities({ equities });

  return (
    <div>
      <HistoricalGroup title="Maiores Altas" items={highs} />
      <HistoricalGroup title="Maiores baixas" items={losses} />
    </div>
  )
};

export default Main;
