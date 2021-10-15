import React from "react";
import NotFound from "../NotFound/NotFound";
import Image from "./Image";
const ProductItemView = props => {
  const results = props.data;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  
  if (results.length > 0) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} title={title} id={id} />;
    });
  } else {
    noImages = <NotFound />; // return 'not found' component if no images fetched
  }
  return (
    <div className="product-item">
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};

export default ProductItemView;
