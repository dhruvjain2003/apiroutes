import { useState, useContext } from 'react';
import ProductContext from '../context/ProductContext';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const { addProduct } = useContext(ProductContext);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !price.trim()) {
            setError('Please fill out all fields.');
            return;
        }
        
        const newProduct = {
            id: Date.now(),
            name: name.trim(),
            price: parseFloat(price),
        };

        addProduct(newProduct);
        setName('');
        setPrice('');
        setError('');
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-md mx-auto"
        >
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Add New Product</h2>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="Product Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div className="mb-4">
                <input 
                    type="number" 
                    placeholder="Price ($)" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
                Add Product
            </button>
        </form>
    );
};

export default ProductForm;
