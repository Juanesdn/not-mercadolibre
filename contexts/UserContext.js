import React, { useReducer, createContext, useContext } from "react";

const UserStateContext = createContext();
const UserDispatchContext = createContext();

const initialState = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  token: null,
  cart: [],
  cartPrice: 0,
  direccion: "",
  telefono: "",
  ciudad: "",
  pais: "",
  codPostal: "",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "input_change": {
      return { ...state, [action.input]: action.payload };
    }
    case "clear_context": {
      return {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        token: null,
        cart: [],
        cartPrice: 0,
      };
    }
    case "user_logged_in": {
      return { ...state, token: action.payload };
    }
    case "reload_token": {
      return { ...state, token: action.payload };
    }
    case "add_to_cart": {
      let price = 0;
      state.cart.map((item) => {
        price = price + item.product.price * item.qty;
      });

      const obj = action.payload;

      price = price + obj.product.price * obj.qty;

      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartPrice: price,
      };
    }
    case "logout": {
      sessionStorage.removeItem("access_token");
      return {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        token: null,
        cart: [],
        cartPrice: 0,
      };
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
