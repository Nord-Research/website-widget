import { h } from "preact";

import './styles.css';

export const Title = ({ children }) => {
  return (
    <p className="title">
      {children}
    </p>
  );
};

export default Title;