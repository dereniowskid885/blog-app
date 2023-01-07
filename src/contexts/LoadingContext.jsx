import { useContext, createContext, useState } from 'react';
import Loader from '/src/components/other/Loader/Loader';
import ScrollToTop from '/src/components/other/ScrollToTop/ScrollToTop';
import Overlay from '/src/components/layout/Overlay/Overlay';

const Loading = createContext();

function LoadingContext({ children }) {
    const [ isLoading, setLoading ] = useState(false);

    return (
        <Loading.Provider value={{ isLoading, setLoading }}>
            {children}
            { isLoading &&
                <>
                    <Loader />
                    <ScrollToTop />
                    <Overlay />
                </>
            }
        </Loading.Provider>
    );
}

export default LoadingContext;

export const useLoading = () => {
    return useContext(Loading);
}