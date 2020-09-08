export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        shoes: [...state.shoes, action.payload]
      };
    case "Empty_Cart":
      return {
        ...state,
        shoes: []
      };
    default:
      return state;
  }
};