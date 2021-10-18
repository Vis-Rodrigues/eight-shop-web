import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../actions/cartActions';
import CartView from './CartView';

const CartController = ({ match, history, location }) => {

    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [productId, dispatch, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        finalizerCart();
    };

    const finalizerCart = () => {
      dispatch(clearCart());
    };

    return (
        <CartView cart={cart} toggleModal={toggleModal} isOpen={isOpen} removeFromCartHandler={removeFromCartHandler}/>
    );
};

export default CartController;
