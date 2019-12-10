import {
    LOAD_PRODUCTS,
    ADD_PRODUCTS,
    DELETE_PRODUCTS
} from './actionTypes'

export function loadProducts(productList) {
    return {
        type: LOAD_PRODUCTS,
        productList
    }
}

export function addProduct(product){
    return {
        type: ADD_PRODUCTS,
        product
    }
}

export function deleteProduct(index){
    return {
        type: DELETE_PRODUCTS,
        index
    }
}