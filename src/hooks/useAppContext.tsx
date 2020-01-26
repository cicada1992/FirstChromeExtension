import React, { createContext, useContext, useState } from "react";

interface AppState {
  objective: string;
  start: Date;
  end: Date;
  isFirstSelection: boolean;
}

interface ProviderProps {
  children: React.ReactChild;
  initialState: AppState;
}

const useAppState = (initialState: AppState) => {
  const [objective, setObjective] = useState(initialState.objective);
  const [start, setStart] = useState(initialState.start);
  const [end, setEnd] = useState(initialState.end);
  const [isFirstSelection, setIsFirstSelection] = useState(
    initialState.isFirstSelection
  );

  return {
    objective,
    setObjective,
    start,
    setStart,
    end,
    setEnd,
    isFirstSelection,
    setIsFirstSelection
  };
};

const AppContext = createContext({
  objective: "PTO",
  setObjective: null,
  start: new Date(),
  setStart: null,
  end: new Date(),
  setEnd: null,
  isFirstSelection: true,
  setIsFirstSelection: null
});

export const AppContextProvider: React.FC<ProviderProps> = ({
  initialState,
  children
}) => {
  const providerValue = useAppState(initialState);
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
