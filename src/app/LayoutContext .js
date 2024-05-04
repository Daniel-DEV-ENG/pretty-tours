"use client"

import { createContext, useState, useContext } from 'react';

export const LayoutContext = createContext({
  isLoginPage: false,
  setIsLoginPage: () => {},
});

export function LayoutProvider({ children }) {
  const [isLoginPage, setIsLoginPage] = useState(false);

  return (
    <LayoutContext.Provider value={{ isLoginPage, setIsLoginPage }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  return useContext(LayoutContext);
}
