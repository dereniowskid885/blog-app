import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Loading from './components/Loading/Loading';
import ScrollToTop from '/src/components/ScrollToTop/ScrollToTop';

const Home = lazy(() => import('./views/Home/Home'));
const About = lazy(() => import('./views/About/About'));
const Offer = lazy(() => import('./views/Offer/Offer'));
const Blog = lazy(() => import('./views/Blog/Blog'));
const BlogPost = lazy(() => import('./views/BlogPost/BlogPost'));
const Panel = lazy(() => import('./views/Panel/Panel'));
const Cart = lazy(() => import('./views/Cart/Cart'));
const Error = lazy(() => import('./views/Error/Error'));
const Product = lazy(() => import('./views/Product/Product'));
const Contact = lazy(() => import('./views/Contact/Contact'));
const Regulations = lazy(() => import('./views/Regulations/Regulations'));

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/o-mnie' element={<About />} />
                    <Route path='/oferta' element={<Offer />} />
                    <Route path='/oferta/:id' element={<Product />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/blog/:id' element={<BlogPost />} />
                    <Route path='/panel-klienta' element={<Panel />} />
                    <Route path='/koszyk' element={<Cart />} />
                    <Route path='/kontakt' element={<Contact />} />
                    <Route path='/regulamin' element={<Regulations page={'regulations'} />} />
                    <Route path='/sposoby-platnosci' element={<Regulations page={'payment-methods'} />} />
                    <Route path='/polityka-prywatnosci' element={<Regulations page={'privacy-policy'} />} />
                    <Route path='/polityka-cookies' element={<Regulations page={'cookies-policy'} />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </Suspense>
            <Footer />
            <ScrollToTop />
        </BrowserRouter>
    )
}

export default App;
