export const productReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':  
            return { ...state, products: action.payload };
        case 'ADD_PRODUCT': 
            return { ...state, products: [...state.products, action.payload] };
        case 'DELETE_PRODUCT':  
            return { ...state, products: state.products.filter(p => p.id !== action.payload) };
        default:
            return state;
    }
};
