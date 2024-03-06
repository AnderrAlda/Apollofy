import {
  FunctionComponent,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface FilterContextType {
  filter: string;
  handleSetFilter: (newValue: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: FunctionComponent<FilterProviderProps> = ({
  children,
}) => {
  const [filter, setFilter] = useState<string>("");

  const handleSetFilter = (newValue: string) => {
    setFilter(newValue);
  };

  return (
    <FilterContext.Provider value={{ filter, handleSetFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export function useFilter(): FilterContextType {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
