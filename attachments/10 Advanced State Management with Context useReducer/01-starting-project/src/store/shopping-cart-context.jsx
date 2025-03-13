import { createContext, useReducer, useState } from "react"; 
import { DUMMY_PRODUCTS } from "../dummy-products";

//default context value only used for intellisense
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {}
});

function shoppingCartReducer(state, action) {
  if (action.type === 'ADD_ITEM')
  {    
    const updatedItems = [...prevShoppingCart.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };    
  }
  else if (action === 'UPDATE_ITEM') {
    const updatedItems = [...prevShoppingCart.items];
        const updatedItemIndex = updatedItems.findIndex(
          (item) => item.id === productId
        );
  
        const updatedItem = {
          ...updatedItems[updatedItemIndex],
        };
  
        updatedItem.quantity += amount;
  
        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex] = updatedItem;
        }
  
        return {
          items: updatedItems,
        };
  }
  return state;
}

export default function CartContextProvider({children}) {
  //shoppingCartDispatch(ACTION)
  //  => shoppingCartReducer(_, ACTION)
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
    items: [],
  } )
  
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  })
  
    function handleAddItemToCart(id) {
      shoppingCartDispatch({
        type: 'ADD_ITEM',
        payload: id
      })
      
    }
  
    function handleUpdateCartItemQuantity(productId, amount) {
      shoppingCartDispatch({
        type: 'UPDATE_ITEM',
        payload: {
          productId: productId,
          amount: amount
        }
      })     
    }
  
    const ctxValue = {
      items: shoppingCartState.items,
      addItemToCart: handleAddItemToCart,
      updateItemQuantity: handleUpdateCartItemQuantity
    }  

    return <CartContext.Provider value={ctxValue}>
      {children}
    </CartContext.Provider>
}