import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { createProductReview, listProductDetails } from '../actions/productActions';
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const ProductScreen = ({ match, history }) => {
    const [qty, setQty] = useState(1);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(1);

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, product, error } = productDetails;

    const productReviewCreate = useSelector((state) => state.productReviewCreate);
    const { success: successProductReview, error: errorProductReview } = productReviewCreate;

    // const userLogin = useSelector((state) => state.userLogin);
    // const { userInfo } = userLogin;

    useEffect(() => {
        if (successProductReview) {
            setRating(1);
            setComment('');
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
        }

        dispatch(listProductDetails(match.params.id));
    }, [dispatch, match, successProductReview]);

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createProductReview(match.params.id, { rating, comment }));
    };

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
                                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
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
                                    {/* {product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Quantity:</Col>
                                                <Col>
                                                    <Form.Control
                                                        as='select'
                                                        value={qty}
                                                        onChange={(e) => setQty(e.target.value)}
                                                    >
                                                        {[...Array(product.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )} */}
                                    <ListGroup.Item className='d-grid'>
                                        <Button
                                            onClick={addToCartHandler}
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
                    <Row>
                        {/* <Col md={6}>
                            <h2>REVIEWS</h2>
                            <ListGroup variant='flush'>
                                {product.reviews.length > 0 ? (
                                    product.reviews.map((review) => (
                                        <ListGroup.Item key={review._id}>
                                            <strong>{review.name}</strong>
                                            <Rating value={review.rating} />
                                            <p>{review.createdAt.substring(0, 10)}</p>
                                            <p>{review.comment}</p>
                                        </ListGroup.Item>
                                    ))
                                ) : (
                                    <Message variant='primary'>No reviews</Message>
                                )}
                                {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}
                                {//userInfo && 
                                (
                                    <Form onSubmit={submitHandler}>
                                        <Form.Group controldId='rating'>
                                            <Form.Label>Rating</Form.Label>
                                            <Form.Control
                                                as='select'
                                                value='rating'
                                                onChange={(e) => setRating(e.target.value)}
                                            >
                                                <option value='1'>1 - Poor</option>
                                                <option value='2'>2 - Fair</option>
                                                <option value='3'>3 - Good</option>
                                                <option value='4'>4 - Very Good</option>
                                                <option value='5'>5 - Excellent</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId='comment'>
                                            <Form.Label>Comment</Form.Label>
                                            <Form.Control
                                                as='textarea'
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Button type='submit' variant='primary' className='mt-2'>
                                            Submit
                                        </Button>
                                    </Form>
                                )}
                            </ListGroup>
                        </Col> */}
                    </Row>
                </>
            )}
        </>
    );
};

export default ProductScreen;
