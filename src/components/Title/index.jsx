import { h } from "preact";
import Skeleton from 'preact-loading-skeleton';

import './styles.css';

export const Title = ({ children, isLoading = false }) => {
  return (
    <p className="title">
      {isLoading ? <Skeleton width={200} /> : children}
    </p>
  );
};

export default Title;