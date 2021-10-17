import React from "react";
import NotFound from "../NotFound/NotFound";
import Image from "./Image";
const ProductItemView = props => {
  const results = props.data;
  let images;
  let products;
  let noImages;
  // map variables to each item in fetched image array and return image component
  console.log(results.length)
  if (results.length > 0) {
    // images = results.map(image => {
    //   let farm = image.farm;
    //   let server = image.server;
    //   let id = image.id;
    //   let secret = image.secret;
    //   let title = image.title;
    //   // let url = `https://farm66.staticflickr.com/65535/51365635629_47788c7657_m.jpg`;
    //   let url = `https://static.paodeacucar.com/img/uploads/1/810/11869810.jpg`;
    //   return <Image url={url} title={title} id={id} />;
    // });
    products = results.map(product => {
      console.log(product)
      let id = product.id;
      let name = product.name;
      let brand = product.brand;
      let isVegan = product.isVegan;
      let isVegetarian = product.isVegetarian;
      let isGlutenFree = product.isGlutenFree;
      let price = product.price;
      let description = product.description;
      let urlImage = product.urlImage;
      console.log(urlImage)
      return <Image url={urlImage} title={name} id={id} />;
    });
  } else {
    noImages = <NotFound />; // return 'not found' component if no images fetched
  }
  return (
    <div className="product-item">
      <ul>
       {products}
      </ul>
      {noImages}
    </div>
  );
};

export default ProductItemView;
