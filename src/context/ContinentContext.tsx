import React, { useState, createContext } from 'react';
import data from '../data';
import { ContinentContextType, ContinentContextProviderProps } from '../types';

export const ContinentContext = createContext({} as ContinentContextType);

const ContinentContextProvider = ({
  children,
}: ContinentContextProviderProps) => {
  const [accordionOpened, setAccordionOpened] = useState<null>(null);
  const [continents, setContinents] = useState(data);

  const toggleAccordionOpened = (accordion: null) => {
    if (accordionOpened === accordion) {
      setAccordionOpened(null);
    } else {
      setAccordionOpened(accordion);
    }
  };

  return (
    <ContinentContext.Provider
      value={{
        accordionOpened,
        toggleAccordionOpened,
        continents,
      }}
    >
      {children}
    </ContinentContext.Provider>
  );
};

export default ContinentContextProvider;
