/**
 * Controller do componente Header
 */
import React from 'react';

//Importa o CSS
import './Header.css';

//Importa os Componentes do BootStrap 
import { Container, Row, Col } from 'react-bootstrap';
//Importa os Componentes do FontAwesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


//importa a função useSelector do React Redux
// import { useSelector } from 'react-redux';

const Header = () => {


    return (
        <Container fluid={true} className="ContainerHeader">
            <Row>
                <Col className="TopHeader">
                    <FontAwesomeIcon icon={faShoppingCart} /> Eight Shop
                </Col>               
            </Row>
        </Container>            
    )
}
export default Header;