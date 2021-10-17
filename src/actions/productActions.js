import ApiEightShop from '../services/ApiEightShop';

import {
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    TYPE_VEGAN,
    TYPE_VEGETARIAN,
    TYPE_GLUTEN_FREE
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await ApiEightShop.get('/products');

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listProductsByType = (type) => async (dispatch) => {
    try {
        let queryString;
        dispatch({ type: PRODUCT_LIST_REQUEST });
        if (type === TYPE_VEGAN) {
            queryString = 'isVegan=true'
        } else if (type === TYPE_VEGETARIAN) {
            queryString = 'isVegetarian=true'
        } else if (type === TYPE_GLUTEN_FREE) {
            queryString = 'isGlutenFree=true'
        }
        console.log(queryString + 'querystring');
        const { data } = await ApiEightShop.get(`/products?${queryString}`);

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const { data } = await ApiEightShop.get(`/products/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// export const deleteProduct = (id) => async (dispatch, getState) => {
//     try {
//         dispatch({ type: PRODUCT_DELETE_REQUEST });

//         const {
//             // userLogin: { userInfo },
//         } = getState();

//         const config = {
//             headers: {
//                 // Authorization: `Bearer ${userInfo.token}`,
//             },
//         };

//         await axios.delete(`/api/products/${id}`, config);

//         dispatch({
//             type: PRODUCT_DELETE_SUCCESS,
//         });
//     } catch (error) {
//         dispatch({
//             type: PRODUCT_DELETE_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message,
//         });
//     }
// };

// export const createProduct = () => async (dispatch, getState) => {
//     try {
//         dispatch({ type: PRODUCT_CREATE_REQUEST });

//         const {
//             // userLogin: { userInfo },
//         } = getState();

//         const config = {
//             headers: {
//                 'Content-type': 'application/json',
//                 // Authorization: `Bearer ${userInfo.token}`,
//             },
//         };

//         const { data } = await axios.post('/api/products', {}, config);

//         dispatch({
//             type: PRODUCT_CREATE_SUCCESS,
//             payload: data,
//         });
//     } catch (error) {
//         dispatch({
//             type: PRODUCT_CREATE_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message,
//         });
//     }
// };

// export const updateProduct = (product) => async (dispatch, getState) => {
//     try {
//         dispatch({ type: PRODUCT_UPDATE_REQUEST });

//         const {
//             // userLogin: { userInfo },
//         } = getState();

//         const config = {
//             headers: {
//                 'Content-type': 'application/json',
//                 // Authorization: `Bearer ${userInfo.token}`,
//             },
//         };

//         const { data } = await axios.put(
//             `/api/products/${product._id}`,
//             product,
//             config
//         );

//         dispatch({
//             type: PRODUCT_UPDATE_SUCCESS,
//             payload: data,
//         });
//     } catch (error) {
//         dispatch({
//             type: PRODUCT_UPDATE_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message,
//         });
//     }
// };

// export const createProductReview =
//     (productId, review) => async (dispatch, getState) => {
//         try {
//             dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });

//             const {
//                 // userLogin: { userInfo },
//             } = getState();

//             const config = {
//                 headers: {
//                     'Content-type': 'application/json',
//                     // Authorization: `Bearer ${userInfo.token}`,
//                 },
//             };

//             await axios.post(
//                 `/api/products/${productId}/reviews`,
//                 review,
//                 config
//             );

//             dispatch({
//                 type: PRODUCT_CREATE_REVIEW_SUCCESS,
//             });
//         } catch (error) {
//             dispatch({
//                 type: PRODUCT_CREATE_REVIEW_FAIL,
//                 payload:
//                     error.response && error.response.data.message
//                         ? error.response.data.message
//                         : error.message,
//             });
//         }
//     };
