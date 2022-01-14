export type MockType = {
  name: string;
  id: number;
  children: {
    name: string;
    children: {
      name: string;
    }[];
  }[];
}[];

export type DisplayContinentsType = {
  name: string;
  code: string;
  countries: {
    name: string;
    code: string;
    languages: {
      name: string;
      code: string;
    }[];
  }[];
};
export interface DisplayContinentsProps {
  continent: DisplayContinentsType;
}

export type ContinentType = {
  id: number;
  name: string;
  children: {
    name: string;
    children: {
      name: string;
    }[];
  }[];
};

export interface ContinentProps {
  continent: ContinentType;
}

export type MockProps = {
  id: string;
  parentId: string;
  text: string;
  level: string;
  children: string[];
}[];

export type ContinentContextType = {
  accordionOpened: null;
  continents: {
    [index: string]: any;
  };
  toggleAccordionOpened: (accordion: any) => void;
};

export type ContinentContextProviderProps = {
  children: React.ReactNode;
};
