import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';
import HomeView from './HomeView';

const HomePage = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <HomeView productList={productList}/>
    );
};

export default HomePage;
