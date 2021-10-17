/**
 * Objeto que junta todos as Sagas que usaremos no aplicativo
 */
//Importa o all  do redux-saga
import { all } from 'redux-saga/effects';

import productInfo from './productInfo/sagas.js';

//Junta todos os sagas importados
export default function* rootSaga() {
    return yield all([productInfo]);
}
