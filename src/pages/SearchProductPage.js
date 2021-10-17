import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Link } from "react-router-dom";
import { Col, Row, Button } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { LinkContainer } from 'react-router-bootstrap';
import { listProductsByType } from '../actions/productActions';

const SearchProductPage = ({ match, history }) => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, products, error } = productList;
    const type = match.params.type;

    useEffect(() => {
        dispatch(listProductsByType(type));
    }, [dispatch]);

    return (
        <>
            <h1>LISTA DE PRODUTOS</h1>
            <Row className="App">
                <Col>
                    <h2>Resultados para produtos {type}</h2>
                </Col>
                <Col>
                    {/* <Button
                                            type='button'
                                            variant='success'
                                            // onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            vegano
                                        </Button>
                                
            <Button
                                            type='button'
                                            variant='success'
                                            // onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            sem glúten
                                        </Button>
                           
            <Button
                                            type='button'
                                            variant='success'
                                            // onClick={() => removeFromCartHandler(item.product)}
                                        >
                                             vegetariano
                                        </Button> */}

                    {/* <Route path="/" render={() => <HomeScreen searchTerm="sem-gluten" />} /> */}
                    <LinkContainer to={`/`}>
                        <Button
                            variant='info' className='btn-sm mx-2'>
                            Limpar filtro
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

export default SearchProductPage;
