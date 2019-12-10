
import { fromJS } from 'immutable';

import {
    LOAD_PRODUCTS, ADD_PRODUCTS, DELETE_PRODUCTS
} from '../actions/actionTypes'

const initialState = fromJS({
    productList: [],
});

function productReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return state.merge({
                loading: true,
                productList: action.productList
            });
        case ADD_PRODUCTS:
            let productList = state.get('productList').slice();
            productList.push(action.product);
            return state.merge({
                loading:true,
                productList
            });
        case DELETE_PRODUCTS:
            return state.merge({
                productList: state.get('productList').filter((item, index) => {
                    return index !== action.index
                })
            });
        default:
            return state;
    }
}


export default productReducer;