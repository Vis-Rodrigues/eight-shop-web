import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Link } from "react-router-dom";
import { Col, Row, Button } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../actions/productActions';
import { LinkContainer } from 'react-router-bootstrap';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, products, error } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <h1>LISTA DE PRODUTOS</h1>
            <Row className="App">
                <Col>
                    <h2>Filtros rápidos</h2>
                </Col>
                <Col>
                    <LinkContainer to={`/search/vegan`}>
                        <Button
                            variant='success' className='btn-sm mx-2'>
                            Vegano
                        </Button>
                    </LinkContainer>
                    <LinkContainer to={`/search/vegetarian`}>
                        <Button
                            variant='success' className='btn-sm mx-2'>
                            Vegetariano
                        </Button>
                    </LinkContainer>
                    <LinkContainer to={`/search/sem-gluten`}>
                        <Button
                            variant='success' className='btn-sm mx-2'>
                            Sem Glúten
                        </Button>
                    </LinkContainer>
                </Col>
            </Row>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
};

export default HomeScreen;
