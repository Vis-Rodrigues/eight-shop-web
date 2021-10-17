import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartScreen = ({ match, history, location }) => {
    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [productId, dispatch, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping');
    };

    return (
        <Row>
            <Col md={8}>
                <h1>Carrinho de compras</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        <h3 className='text-dark'>Ainda não possui item :(</h3>
                        <Link className='btn btn-primary my-3' to='/'>
                            Voltar
                        </Link>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map((item) => (
                            <ListGroup.Item variant='flush' key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                            {item.name}
                                    </Col>
                                    <Col md={2}>R$ {item.price}</Col>
                                    <Col md={2}>{item.qty}
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type='button'
                                            variant='light'
                                            onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            <i className='fas fa-trash' />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>
                                SUBTOTAL ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                                ITEMS
                            </h2>
                            R$
                            {cartItems
                                .reduce((acc, item) => acc + item.price * item.qty, 0)
                                .toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item className='d-grid'>
                            <Button
                                type='button'
                                className='btn-success'
                                disabled={cartItems.length === 0}
                                onClick={checkoutHandler}
                            >
                                FINALIZAR COMPRA
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default CartScreen;
