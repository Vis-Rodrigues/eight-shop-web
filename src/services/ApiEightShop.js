//Importa a biblioteca Axios
import axios from 'axios';

const ApiEightShop = axios.create({
    baseURL: process.env.REACT_APP_API_EIGHT_SHOP,
});

export default ApiEightShop;
