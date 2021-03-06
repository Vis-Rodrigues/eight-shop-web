import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from '../Rating';
import './Product.css'

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link className='text-decoration-none' to={`/products/${product.id}`}>
                <Card.Img src={product.imageUrl} variant='top' />
            </Link>

            <Card.Body>
                <Link className='text-decoration-none' to={`/products/${product.id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as='h3'>R$ {product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
