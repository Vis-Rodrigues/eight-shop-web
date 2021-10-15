import React from "react";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import './ProductItem.css';

const Image = ({ url, title, id }) => {
  return (

    <div>
      <li>
        <img src={url} alt={title} />
      </li>
      <span>
        <b>{title}
        <br/>
        {id}</b>
      </span>
    </div>
  )
}

export default Image;
