import { h } from "preact";
import './main.css';


const CardItem = () => <div className="card-item">Card</div>;

export const HistoryContent = () => (
  <div>
    <p className="title">No dia de hoje</p>
    <div className="card-item-container">
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  </div>
);

export default HistoryContent;