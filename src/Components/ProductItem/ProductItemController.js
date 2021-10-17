import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../../context/PhotoContext";
import ProductItemView from "./ProductItemView";
import Loader from "../Loader/Loader";

const ProductItemController = ({ searchTerm }) => {
  const { products, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);
  
  return (
    <div>
      {loading ? <Loader /> : <ProductItemView data={products} />}
    </div>
  );
};

export default ProductItemController;
