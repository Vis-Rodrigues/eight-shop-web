import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

const Footer = () => {
    return (
            <Container fluid={true} className="ContainerFooter">
                <Row>
                    <Col className="TextFooter">
                    <FontAwesomeIcon icon={faRocket} />&nbsp;&nbsp; FIAP MBA @2021 All Rights Reserved
                    </Col>
                </Row>
            </Container>
    );
};

export default Footer;
