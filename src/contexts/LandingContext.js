import React, { createContext, useState, useEffect } from "react";

export const LandingContext = createContext({});

export const LandingContextProvider = ({ children }) => {
  const size = useWindowDimensions();

  return (
    <LandingContext.Provider value={{ size }}>
      {children}
    </LandingContext.Provider>
  );
};

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
