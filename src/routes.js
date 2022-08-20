import Nav from 'components/Nav';
import StandardPage from 'components/StandardPage';
import About from 'pages/About';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const AppRouter = () => {
    return (
        <main>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<StandardPage />}>
                        <Route index element={<Home />} />
                        <Route path='menu' element={<Menu />} />
                        <Route path='about' element={<About />} />
                    </Route>
                </Routes>
            </Router>
        </main>

    );
};

export default AppRouter;