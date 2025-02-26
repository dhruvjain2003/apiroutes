import { useContext } from 'react';
import ProductContext from '../context/ProductContext';

const ProductList = () => {
    const { products, deleteProduct } = useContext(ProductContext);

    return (
        <div className="p-6 max-w-3xl mx-auto">
            {products.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No products available.</p>
            ) : (
                <ul className="space-y-4">
                    {products.map((product) => (
                        <li 
                            key={product.id} 
                            className="flex justify-between items-center p-4 bg-white shadow-lg rounded-lg border border-gray-200"
                        >
                            <span className="text-lg font-semibold text-gray-800">
                                {product.name} - <span className="text-green-600">${product.price}</span>
                            </span>
                            <button 
                                onClick={() => deleteProduct(product.id)} 
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition duration-300"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;
