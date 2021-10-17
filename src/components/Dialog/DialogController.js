import React, {useState, useEffect, useRef} from 'react';
import DialogView from './DialogView'

const DialogController = ({value}) => {
    console.log( "DialogController2: " + value.value);
    const [isOpen, setIsOpen] = useState(value.value);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(!isOpen);
    };
  
    return (

        <DialogView
          show={isOpen}
          onHide={hideModal}
          onClick={showModal}
        />

      // <>
      //   <button onClick={showModal}>Display Modal</button>
      //   <Modal show={isOpen} onHide={hideModal}>
      //     <Modal.Header>
      //       <Modal.Title>Hi</Modal.Title>
      //     </Modal.Header>
      //     <Modal.Body>The body</Modal.Body>
      //     <Modal.Footer>
      //       <button onClick={hideModal}>Cancel</button>
      //       <button>Save</button>
      //     </Modal.Footer>
      //   </Modal>
      // </>
    );
  };

export default DialogController;