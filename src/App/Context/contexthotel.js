import React, { useState } from "react";
import { data } from "../../services/stays";

const AppContext = React.createContext({});

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(data);
  const [location, setLocation] = useState("Helsinki, Finland");

  const handleContext = (loc) => {
    const city = loc.split(",")[0];
    const context = data.filter((item) => item.city === city);
    setState(context); setLocation(loc);

  };

  return (
    <AppContext.Provider value={{ state, setState, location, setLocation, handleContext }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
