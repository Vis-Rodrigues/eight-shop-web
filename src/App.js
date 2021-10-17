import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
// import LoginScreen from './pages/LoginScreen';
// import RegisterScreen from './pages/RegisterScreen';
// import ProfileScreen from './pages/ProfileScreen';
// import ShippingScreen from './pages/ShippingScreen';
// import PaymentScreen from './pages/PaymentScreen';
// import PlaceOrderScreen from './pages/PlaceOrderScreen';
// import OrderScreen from './pages/OrderScreen';
// import UserListScreen from './pages/UserListScreen';
// import OrderListScreen from './pages/OrderListScreen';
// import ProductListScreen from './pages/ProductListScreen';
// import ProductEditScreen from './pages/ProductEditScreen';
import SearchProductPage from './pages/SearchProduct/SearchProductPage';

const App = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    {/* <Route path='/orders/:id' component={OrderScreen} />
                    <Route path='/shipping' component={ShippingScreen} />
                    <Route path='/payment' component={PaymentScreen} />
                    <Route path='/placeorder' component={PlaceOrderScreen} />
                    <Route path='/login' component={LoginScreen} />
                    <Route path='/register' component={RegisterScreen} />
                    <Route path='/profile' component={ProfileScreen} /> */}
                    <Route path='/products/:id' component={ProductPage} />
                    <Route path='/search/:type' component={SearchProductPage} />
                    <Route path='/cart/:id?' component={SearchProductPage} />
                    {/* <Route path='/admin/userlist' component={UserListScreen} />
                    <Route
                        path='/admin/products/:id/edit'
                        component={ProductEditScreen}
                    />
                    <Route
                        path='/admin/productlist'
                        component={ProductListScreen}
                    />
                    <Route
                        path='/admin/orderlist'
                        component={OrderListScreen}
                    /> */}
                    <Route path='/' component={HomePage} exact />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
