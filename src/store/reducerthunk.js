const initialState = {
    products: []
};


export function productReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_PRODUCT":
            console.log("Fetched products:", action.payload);
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
    
         
       
       
}






// const initialState = {
//     products: []
//  };
 
//  export function productReducer(state = initialState, action) {
//      switch (action.type) {
//          case "SET_PRODUCT":
//              return {
//                  ...state,
//                  products: action.payload
//              };
//          default:
//              return state;
//      }
//  }