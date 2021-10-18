import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductsByType } from '../../actions/productActions';
import SearchProductView from './SearchProductView';

const SearchProductController = ({ match, history }) => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const type = match.params.type;

    useEffect(() => {
        dispatch(listProductsByType(type));
    }, [dispatch]);

    return (
        <SearchProductView productList={productList} type={type}/>
    );
};

export default SearchProductController;
