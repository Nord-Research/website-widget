import { h } from "preact";
import "./styles.css";

const LeadsContentLayout = ({ children, containerStyles = {} }) => {
  const { direction, gap } = containerStyles;
  const styles = {
    gap: gap ? gap : '10px',
    gridAutoFlow: direction === 'horizontal' ? 'column' : 'row',
    ...containerStyles,
  };

  return (
    <div className="container" style={styles}>
      {children}
    </div>
  );
}



export default LeadsContentLayout;
