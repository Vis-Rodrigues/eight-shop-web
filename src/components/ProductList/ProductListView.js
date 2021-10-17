import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import Product from '../Product';
import Loader from '../Loader';
import Message from '../Message';
import { LinkContainer } from 'react-router-bootstrap';

const ProductListView = (props) => {

    const { loading, products, error } = props.productList;

    return (
        <>
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

export default ProductListView;
