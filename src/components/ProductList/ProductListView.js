import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import Loader from '../Loader';
import Message from '../Message';

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
                        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
};

export default ProductListView;
