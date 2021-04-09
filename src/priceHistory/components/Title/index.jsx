import { h } from "preact";

import './styles.css';

export const Main = ({ children }) => {
  return (
    <p className="title">
      {children}
    </p>
  );
};

export default Main;