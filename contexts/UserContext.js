import React, { useReducer, createContext, useContext } from "react";

const UserStateContext = createContext();
const UserDispatchContext = createContext();

const initialState = {
  username: "",
  password: "",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "input_change": {
      return { ...state, [action.input]: action.payload };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

const useUserState = () => {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a CountProvider");
  }
  return context;
};

const useUserDispatch = () => {
  const context = useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a CountProvider");
  }
  return context;
};

const useUser = () => {
  return [useUserState(), useUserDispatch()];
};

export { UserProvider, useUserState, useUserDispatch, useUser };
