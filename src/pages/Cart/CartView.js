import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Message from '../../components/Message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import DialogView from '../../components/Dialog/DialogView';
import './Cart.css';

const CartView = (props) => {

    const { cartItems } = props.cart;

    return (
        <Row>
            <Col md={8}>
                <h1>Carrinho de compras</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        <h3 className='text-dark'>Ainda não possui item :(</h3>
                        <h3 className='text-dark'>Por favor, escolha um produto</h3>

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
                                        <Image src={item.image} alt={item.name} fluid rounded className="cart-imagee" />
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
                                            onClick={() => props.removeFromCartHandler(item.product)}
                                        >
                                            <i className='fas fa-trash' />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                        <Link className='btn btn-primary' to='/'>
                            <FontAwesomeIcon icon={faPlusCircle} /> Adicionar Itens
                        </Link>
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>
                                SUBTOTAL ({cartItems.reduce((count, item) => count + item.qty, 0)})
                                ITEMS
                            </h2>
                            R$
                            {cartItems
                                .reduce((count, item) => count + item.price * item.qty, 0)
                                .toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item className='d-grid'>
                            <Button
                                type='button'
                                className='btn-success'
                                disabled={cartItems.length === 0}
                                onClick={props.toggleModal}
                            >
                                FINALIZAR COMPRA
                            </Button>
                            <DialogView show={props.isOpen}
                                onHide={props.toggleModal}>
                            </DialogView>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default CartView;
