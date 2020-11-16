import { h, createContext, ComponentChildren } from "preact";
import { ApiClient } from "./services/apiClient";
import { useRef } from "preact/hooks";

export const ConfigContext = createContext({});
export const ServiceContext = createContext(undefined);

export const AppContext = ({ children, config }) => {
  const services = useRef(
    new ApiClient({
      id: config.id || ""
    })
  );
  return (
    <ConfigContext.Provider value={config}>
      <ServiceContext.Provider value={services.current}>
        {children}
      </ServiceContext.Provider>
    </ConfigContext.Provider>
  );
};
