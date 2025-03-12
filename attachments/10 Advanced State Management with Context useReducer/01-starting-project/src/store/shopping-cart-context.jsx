import { createContext } from "react"; 

//default context value only used for intellisense
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {}
});

