import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../../components/Rating';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const ProductView = (props) => {
    const { loading, product, error } = props.productDetails;

    return (
        <>
            <Link className='btn btn-warning my-3' to='/'>
                VOLTAR
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Row>
                        <Col md={4}>
                            <Image src={product.imageUrl} alt={product.name} fluid />
                        </Col>
                        <Col md={5}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating value={product.rating} />
                                </ListGroup.Item>
                                <ListGroup.Item>Preço: R${product.price}</ListGroup.Item>
                                <ListGroup.Item>Descrição: {product.description}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Preço:</Col>
                                            <Col>
                                                <strong>R$ {product.price}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status:</Col>
                                            <Col>{product.countInStock > 0 ? 'Em estoque' : 'Indisponível'}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='d-grid'>
                                        <Button
                                            onClick={props.addToCartHandler}
                                            className='btn-success'
                                            type='button'
                                            disabled={product.countInStock === 0}
                                        >
                                            <FontAwesomeIcon icon={faPlusCircle} /> Adicionar
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </>
            )}
        </>
    );
};

export default ProductView;
