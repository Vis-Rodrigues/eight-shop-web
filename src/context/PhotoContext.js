import React, { createContext, useState } from "react";
import ApiEightShop from '../services/ApiEightShop';
import axios from 'axios';
import { apiKey } from "../api/config";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = query => {
    let queryString;
    console.log("consulta " + query)

      // axios
      // .get(
      //   `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      // )
      // ApiEightShop.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      if (query == 'vegano'){
        queryString = 'isVegan=true'
      } else if (query == 'vegetariano'){
        queryString = 'isVegetarian=true'
      } else if (query == 'sem-gluten'){
        queryString = 'isGlutenFree=true'
      } 
      
      ApiEightShop.get(`/products?${queryString}`)
      .then(response => {
        setProducts(response.data);
        setLoading(false);
        console.log("Chegou aqui")
        console.log(response.data)
        console.log("Terminou aqui")
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });

      // ApiEightShop.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      // .then(response => {
      //   console.log("Chegou aqui")
      //   // setImages('https://static.paodeacucar.com/img/uploads/1/810/11869810.jpg');
      //   // setImages(response.data.photos.photo);
      //   setLoading(false);
      // })
      // .catch(error => {
      //   console.log(
      //     "Encountered an error with fetching and parsing data",
      //     error
      //   );
      // });
  };
  return (
    <PhotoContext.Provider value={{ products, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
