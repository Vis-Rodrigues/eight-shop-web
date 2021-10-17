import React from 'react';
import { Container } from 'react-bootstrap';
import ProductListView from '../../components/ProductList/ProductListView';
import { Col, Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

const HomeView = props => {
    return (
        <Container>
            <h1>LISTA DE PRODUTOS</h1>
            <Row className="App">
                <Col>
                    <h2>Filtros rápidos</h2>
                </Col>
                <Col>
                    <LinkContainer to={`/search/vegan`}>
                        <Button
                            variant='success' className='btn-md mx-6'>
                            Vegano
                        </Button>
                    </LinkContainer>
                    <LinkContainer to={`/search/vegetarian`}>
                        <Button
                            variant='success' className='btn-md mx-4'>
                            Vegetariano
                        </Button>
                    </LinkContainer>
                    <LinkContainer to={`/search/sem-gluten`}>
                        <Button
                            variant='success' className='btn-md mx-6'>
                            Sem Glúten
                        </Button>
                    </LinkContainer>
                </Col>
            </Row>
            <ProductListView productList={props.productList} />
        </Container>
    );
};

export default HomeView;
