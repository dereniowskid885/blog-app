import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './views/Home/Home';
import About from './views/About/About';
import Offer from './views/Offer/Offer';
import Blog from './views/Blog/Blog';
import Panel from './views/Panel/Panel';
import Cart from './views/Cart/Cart';
import Error from './views/Error/Error';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/offer' element={<Offer />} />
                <Route path='/blog' element={<Blog />} />
                {/* <Route path='/blog/:slug' element={<BlogPost />} /> */}
                <Route path='/panel' element={<Panel />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
