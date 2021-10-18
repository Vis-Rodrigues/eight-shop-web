import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeController from './pages/Home/HomeController';
import ProductController from './pages/Product/ProductController';
import CartController from './pages/Cart/CartController';
import SearchProductController from './pages/SearchProduct/SearchProductController';

const App = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route path='/products/:id' component={ProductController} />
                    <Route path='/search/:type' component={SearchProductController} />
                    <Route path='/cart/:id?' component={CartController} />
                    <Route path='/' component={HomeController} exact />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
