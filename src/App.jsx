import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './views/Home/Home';
import About from './views/About/About';
import Offer from './views/Offer/Offer';
import Blog from './views/Blog/Blog';
import BlogPost from './views/BlogPost/BlogPost';
import Panel from './views/Panel/Panel';
import Cart from './views/Cart/Cart';
import Error from './views/Error/Error';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/o-mnie' element={<About />} />
                <Route path='/oferta' element={<Offer />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog/:id' element={<BlogPost />} />
                <Route path='/panel-klienta' element={<Panel />} />
                <Route path='/koszyk' element={<Cart />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
