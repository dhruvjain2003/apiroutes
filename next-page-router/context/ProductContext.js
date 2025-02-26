import { createContext, useReducer, useEffect } from 'react';
import { productReducer } from './ProductReducer';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const initialState = { products: [] };

    const [state, dispatch] = useReducer(productReducer, initialState);

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => dispatch({ type: 'GET_PRODUCTS', payload: data }))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addProduct = (product) => {
        dispatch({ type: 'ADD_PRODUCT', payload: product });
    };

    const deleteProduct = (id) => {
        dispatch({ type: 'DELETE_PRODUCT', payload: id });
    };

    return (
        <ProductContext.Provider value={{ ...state, addProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
