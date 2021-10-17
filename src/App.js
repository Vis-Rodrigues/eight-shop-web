import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './pages/HomePage';
import ProductScreen from './pages/ProductPage';
import CartScreen from './pages/CartPage';
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
import SearchProductPage from './pages/SearchProductPage';

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
                    <Route path='/products/:id' component={ProductScreen} />
                    <Route path='/search/:type' component={SearchProductPage} />
                    <Route path='/cart/:id?' component={CartScreen} />
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
                    <Route path='/' component={HomeScreen} exact />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
