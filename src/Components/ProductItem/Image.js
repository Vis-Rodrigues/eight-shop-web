import React from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import './ProductItem.css';

const Image = ({ url, title, id }) => {
  return (
    <Container fluid={true} >
    <Row>
      <Col>
          <li>
            <img src={url} alt={title} />
          </li>
      </Col>
    </Row>
    <Row>
      <Col>
        <b>{title}</b>
      </Col>
    </Row>
    <Row>
      <Col>
        <b>{id}</b>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button><FontAwesomeIcon icon={faPlusCircle} /></Button>
        <Button><FontAwesomeIcon icon={faMinusCircle} /></Button>
      </Col>
    </Row>
  </Container>
  )
}

export default Image;
