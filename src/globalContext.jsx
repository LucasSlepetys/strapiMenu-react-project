import { createContext, useContext, useState } from 'react';

const Context = createContext();
export const getContext = () => {
  return useContext(Context);
};

const GlobalContext = ({ children }) => {
  const [isDisplaySideBar, setIsDisplaySideBar] = useState(false);

  const toggleSideBar = () => {
    setIsDisplaySideBar(!isDisplaySideBar);
  };

  const globalValues = {
    isDisplaySideBar,
    toggleSideBar,
  };

  return <Context.Provider value={globalValues}>{children}</Context.Provider>;
};

export default GlobalContext;
