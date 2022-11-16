import { createContext, useContext, useReducer } from "react";

// Data Layer
export const StateContext = createContext();

// Provider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// How we use inside a component
export const useStateValue = () => useContext(StateContext);
