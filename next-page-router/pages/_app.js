import { LoaderProvider } from '../context/LoaderContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <LoaderProvider>
            <Component {...pageProps} />
        </LoaderProvider>
    );
}

export default MyApp;
