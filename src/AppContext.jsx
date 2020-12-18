import { h, createContext } from "preact";

export const ConfigContext = createContext({});

export const AppContext = ({ children, config }) => {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};
