/**
 * Objeto que reúne as sagas deste módulo
 */
//Importa os effects do Redux-Saga 
import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import ApiEightShop from '../../../services/ApiEightShop';


// Importa as funções Actions que serão chamadas pelo Saga
import {
    searchAllProducts,
} from './actions';

function* getAllProducts() {
    try {
        console.log("Start Connection");
        //Envia o Redux action que iniciou a conexão
        // yield put(getBusLineStopsStart(busLine));

        //Realiza a conexão para buscar as linhas
        const returnInfo = yield call(ApiEightShop.get, '/products');
        console.log(returnInfo);        
        //Verificar se o retorno é um array, se sim, volta sucesso
        if (returnInfo.data instanceof Array){
            console.log("Success Call");
            // yield put(getBusLineStopsFinishSuccess(returnInfo.data, apiToken));
        } else {
            console.log("NOT SUCCESS");
            // yield put(getBusLineStopsFinishError());
        }        
    } catch (err) {
        //console.log(err);
        console.log("Error Call");
        // yield put(getBusLineStopsFinishError());
    }
}

export default all([
    takeLatest('productInfo/SEARCH_ALL_PRODUCTS', getAllProducts),    
]);
