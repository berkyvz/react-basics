import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_PRODUCTS } from './actions/actionTypes';
import { loadProductsSuccess, loadProductsError } from './actions/products'
import { LOAD_PRODUCTS_URL } from './path';

export function* loadProductsHandler() {
    try {
        const response = yield call(fetch, LOAD_PRODUCTS_URL, { x: 1 });
        console.log(response)
        if (response.status !== 200) {
            yield put(loadProductsError('An error occurred'))
        } else {
            let responseJSON = yield call((r) => r.json(), response);
            yield put(loadProductsSuccess(responseJSON));
        }
    } catch (e) {
        yield put(loadProductsError('An error occurred'))
    }
}

export default function* sagaHandler() {
    yield takeLatest(LOAD_PRODUCTS, loadProductsHandler)
}