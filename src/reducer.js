export const initialState = {
  basket: [],
  user: null
};

// Selector. PROFESSIONAL way of handling data!!!!! Putting this funciton inside of subtotal.js is bad practice
export const getBasketTotal = (basket) => basket?.reduce((total, item) => total + item.price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case 'REMOVE_FROM_BASKET':
      /*
      DONT DO THIS
      return {
        ...state,
        basket: state.basket.filter((item)=> item.id === aciton.id)
      }
      THIS WILL REMOVE ALL ITEMS
      */
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        // ***THE TRICK****
        newBasket.splice(index, 1);
      }
      else {
        console.warn("CAN'T REMOVE");
      }

      return {
        ...state,
        basket: newBasket
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      };


    default:
      return state;
  }
};

export default reducer;
