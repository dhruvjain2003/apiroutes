import { useContext, useEffect, useState } from 'react';
import LoaderContext from '../context/LoaderContext';

const ProductList = () => {
    const { loading, setLoading } = useContext(LoaderContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/products');
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
            setLoading(false); 
        };

        fetchProducts();
    }, [setLoading]);

    return (
        <div className="p-6 max-w-3xl mx-auto">
            {loading ? ( 
                <div className="text-center text-lg text-blue-600 font-semibold">Loading products...</div>
            ) : products.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No products available.</p>
            ) : (
                <ul className="space-y-4">
                    {products.map((product) => (
                        <li key={product.id} className="flex justify-between items-center p-4 bg-white shadow-lg rounded-lg border border-gray-200">
                            <span className="text-lg font-semibold text-gray-800">
                                {product.name} - <span className="text-green-600">${product.price}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;
