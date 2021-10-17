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
        // <>
        //     <h1>LISTA DE PRODUTOS</h1>
        //     <Row className="App">
        //         <Col>
        //             <h2>Filtros rápidos</h2>
        //         </Col>
        //         <Col>
        //             <LinkContainer to={`/search/vegan`}>
        //                 <Button
        //                     variant='success' className='btn-sm mx-2'>
        //                     Vegano
        //                 </Button>
        //             </LinkContainer>
        //             <LinkContainer to={`/search/vegetarian`}>
        //                 <Button
        //                     variant='success' className='btn-sm mx-2'>
        //                     Vegetariano
        //                 </Button>
        //             </LinkContainer>
        //             <LinkContainer to={`/search/sem-gluten`}>
        //                 <Button
        //                     variant='success' className='btn-sm mx-2'>
        //                     Sem Glúten
        //                 </Button>
        //             </LinkContainer>
        //         </Col>
        //     </Row>
        //     {loading ? (
        //         <Loader />
        //     ) : error ? (
        //         <Message variant='danger'>{error}</Message>
        //     ) : (
        //         <Row>
        //             {products.map((product) => (
        //                 <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
        //                     <Product product={product} />
        //                 </Col>
        //             ))}
        //         </Row>
        //     )}
        // </>
    );
};

export default HomePage;
