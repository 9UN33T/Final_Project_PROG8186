const initialState = {
    sneakers: []
  };
  
  const sneakerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SNEAKERS':
        return {
          ...state,
          sneakers: action.payload
        };
      default:
        return state;
    }
  };
  
  export default sneakerReducer;
  