/**
 * Objeto que reúne os Actions que alteram as informações no BusInfo
 */

//Função que adiciona Action Start no Search Buslines
export function searchAllProducts() {

    //Retorna o Redux Action busInfo/SEARCH_BUSLINES_START
    return {
        type: 'productInfo/SEARCH_ALL_PRODUCTS',
    };
}
