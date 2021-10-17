import ApiEightShop from '../services/ApiEightShop';
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_REMOVE_ALL_ITEM
} from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await ApiEightShop.get(`/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        },
    });

    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
    );
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    });

    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
    );
};

export const clearCart = () => async (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ALL_ITEM });
    console.log('clearCart');
    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
    );
};

