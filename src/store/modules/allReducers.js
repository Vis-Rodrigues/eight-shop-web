/**
 * Objeto que junta todos os Reducers que usaremos no aplicativo
 */

// Importa o combineReducers  do redux
import { combineReducers } from 'redux';

import productInfo from './productInfo/reducer';

//Junta os reducers
export default combineReducers({ productInfo });
