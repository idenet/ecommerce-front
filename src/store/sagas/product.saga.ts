import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import { API } from '../../config'
import {
  FilterProductAction,
  FILTER_PRODUCT,
  GetProductAction,
  getProductSuccess,
  GET_PRODUCT,
  SearchProductAction,
  searchProductSuccess,
  SEARCH_PRODUCT,
} from '../actions/product.action'
import { Product } from '../models/product'
import { filterProductSuccess } from './../actions/product.action'

function* handleGetProduct({ sortBy, order, limit }: GetProductAction) {
  let response: { data: Product[] } = yield axios.get<Product[]>(
    `${API}/products`,
    {
      params: { sortBy, order, limit },
    }
  )
  yield put(getProductSuccess(response.data, sortBy))
}

function* handleSearchProduct({
  payload: { search, category },
}: SearchProductAction) {
  let response: { data: Product[] } = yield axios.get<Product[]>(
    `${API}/products/search`,
    {
      params: { search, category },
    }
  )

  yield put(searchProductSuccess(response.data))
}

function* handleFilterProduct(action: FilterProductAction) {
  let response: { data: { size: number; data: Product[] } } = yield axios.post(
    `${API}/products/filter`,
    action.payload
  )
  yield put(filterProductSuccess(response.data, action.payload.skip))
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT, handleGetProduct)
  yield takeEvery(SEARCH_PRODUCT, handleSearchProduct)
  yield takeEvery(FILTER_PRODUCT, handleFilterProduct)
}
