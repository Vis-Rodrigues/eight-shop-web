import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import ProductController from './pages/Product/ProductController';
import CartPage from './pages/CartPage';
import SearchProductPage from './pages/SearchProduct/SearchProductPage';

const App = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route path='/products/:id' component={ProductController} />
                    <Route path='/search/:type' component={SearchProductPage} />
                    <Route path='/cart/:id?' component={CartPage} />
                    <Route path='/' component={HomePage} exact />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
