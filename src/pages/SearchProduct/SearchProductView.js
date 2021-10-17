import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProductListView from '../../components/ProductList/ProductListView';

const SearchProductView = props => {
    return (
        <>
            <h1>LISTA DE PRODUTOS</h1>
            <Row className="App">
                <Col>
                    <h2>Resultados para produtos {props.type}</h2>
                </Col>
                <Col>
                    <LinkContainer to={`/`}>
                        <Button
                            variant='info' className='btn-sm mx-2'>
                            Limpar filtro
                        </Button>
                    </LinkContainer>
                </Col>
            </Row>
            <ProductListView productList={props.productList}/>
        </>
    );
};

export default SearchProductView;
