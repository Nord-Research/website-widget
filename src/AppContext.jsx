import { h, createContext } from "preact";
import { useContext } from "preact/hooks";


export const ConfigContext = createContext({});

export const AppContext = ({ children, config }) => (
  <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
);


export const useAppContextConsumer = () => useContext(ConfigContext);
