import Footer from 'components/Footer';
import Nav from 'components/Nav';
import StandardPage from 'components/StandardPage';
import About from 'pages/About';
import Dish from 'pages/Dish';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import NotFound from 'pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const AppRouter = () => {
    return (
        <main className='container'>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<StandardPage />}>
                        <Route index element={<Home />} />
                        <Route path='menu' element={<Menu />} />
                        <Route path='about' element={<About />} />
                    </Route>
                    <Route path='dish/:id' element={<Dish />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </main>

    );
};

export default AppRouter;


