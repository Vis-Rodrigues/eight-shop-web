import React from 'react';

//Importa os Componentes do BootStrap 
import { Button, Modal } from 'react-bootstrap';

const DialogView = (props) => {

  return (
    <>
      
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Compra finalizada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Muito obrigada pela preferência, é um prazer tê-lo aqui conosco!<br />
          Seus itens estão sendo preparados e logo serão entregues. =D
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.onHide}>OK</Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}
export default DialogView;

