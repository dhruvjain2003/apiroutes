import { ProductProvider } from '../context/ProductContext';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default function Home() {
    return (
        <ProductProvider>
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4 text-center">Product Management</h1>
                <ProductForm />
                <ProductList />
            </div>
        </ProductProvider>
    );
}
