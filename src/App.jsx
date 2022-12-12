import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '/src/components/layout/Header/Header';
import Footer from '/src/components/layout/Footer/Footer';
import Loading from '/src/components/Loading/Loading';
import ScrollToTop from '/src/components/ScrollToTop/ScrollToTop';
import Dialog from '/src/contexts/DialogContext';

const Home = lazy(() => import('/src/views/Home/Home'));
const About = lazy(() => import('/src/views/About/About'));
const Offer = lazy(() => import('/src/views/Offer/Offer'));
const Blog = lazy(() => import('/src/views/Blog/Blog'));
const BlogPost = lazy(() => import('/src/views/BlogPost/BlogPost'));
const Panel = lazy(() => import('/src/views/Panel/Panel'));
const Cart = lazy(() => import('/src/views/Cart/Cart'));
const Error = lazy(() => import('/src/views/Error/Error'));
const Product = lazy(() => import('/src/views/Product/Product'));
const Contact = lazy(() => import('/src/views/Contact/Contact'));
const Regulations = lazy(() => import('/src/views/Regulations/Regulations'));
const Account = lazy(() => import('/src/views/Account/Account'));

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/o-mnie' element={<About />} />
                    <Route path='/oferta' element={<Dialog><Offer /></Dialog>} />
                    <Route path='/oferta/:id' element={<Product />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/blog/:id' element={<BlogPost />} />
                    <Route path='/panel-klienta' element={<Dialog><Panel /></Dialog>} />
                    <Route path='/koszyk' element={<Cart />} />
                    <Route path='/kontakt' element={<Contact />} />
                    <Route path='/regulamin' element={<Regulations page={'regulations'} />} />
                    <Route path='/sposoby-platnosci' element={<Regulations page={'payment-methods'} />} />
                    <Route path='/polityka-prywatnosci' element={<Regulations page={'privacy-policy'} />} />
                    <Route path='/polityka-cookies' element={<Regulations page={'cookies-policy'} />} />
                    <Route path='/konto' element={<Account />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </Suspense>
            <Footer />
            <ScrollToTop />
        </BrowserRouter>
    )
}

export default App;
