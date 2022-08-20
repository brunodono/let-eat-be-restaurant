import Nav from 'components/Header';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const AppRouter = () => {
    return ( 
        <Router>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;