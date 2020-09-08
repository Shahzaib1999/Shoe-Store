import React, { useReducer, createContext } from "react";
import ShoeReducer from "./ShoeReducer";

const initialState = {
  shoes: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(ShoeReducer, initialState);

  const addToCart = (cartItem) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: cartItem,
      });
    
  };
  return (
    <GlobalContext.Provider value={{ shoes: state.shoes, addToCart }}>
      {children}
    </GlobalContext.Provider>
  );
};