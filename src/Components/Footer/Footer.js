/**
 * Controller do componente Footer
 */
import React from 'react';

//Importa o CSS
import './Footer.css';

//Importa os Componentes do BootStrap 
import { Container, Row, Col } from 'react-bootstrap';
//Importa os Componentes do FontAwesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    return (
        <Container fluid={true} className="ContainerFooter">
            <Row>
                <Col className="TextFooter">
                    <FontAwesomeIcon icon={faRocket} />&nbsp;&nbsp; FIAP MBA @2021 All Rights Reserved
                </Col>
            </Row>
        </Container>
    )
}
export default Footer;