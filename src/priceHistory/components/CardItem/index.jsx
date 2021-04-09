import { h } from "preact";

import './styles.css';

export const CardItem = ({ children }) => {
  return (
    <div className="card-item">
      {children}
    </div>
  );
};

export default CardItem;