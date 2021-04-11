import { h } from "preact";
import { useEffect } from "preact/hooks";

import Title from '../Title';
import CardItem from '../CardItem';

import { getIndicators } from '../../../services/indicators.service'

import './styles.css';

export const HistoricalGroup = () => {
  useEffect(() => {
    (async () => {
      const response = await getIndicators();
      console.log(response)
    })();
  }, []);

  return (
    <div className="historical-group__container">
      <Title>No dia de hoje</Title>
      <div className="historical-group__cards">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

export default HistoricalGroup;