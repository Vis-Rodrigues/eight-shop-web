import React from "react";
import Form from "./ProductSearchView";
import Navigation from "../ProductNavigation/ProductNavigation";

const ProductSearchController = ({ history, handleSubmit }) => {
  return (
    <div>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default ProductSearchController;
