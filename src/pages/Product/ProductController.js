import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../../actions/productActions';
import ProductView from './ProductView'

const ProductController = ({ match, history }) => {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);

    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    }, [dispatch, match]);

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`);
    };

    return (
        <ProductView productDetails={productDetails} addToCartHandler={addToCartHandler} />
    );
};

export default ProductController;
