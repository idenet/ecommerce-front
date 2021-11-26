import { takeEvery, put } from 'redux-saga/effects'
import {
  SIGNUP,
  SignupAction,
  signupFail,
  signupSuccess,
} from '../actions/auth.action'
import axios from 'axios'
import { API } from './../../config'

function* handleSignup(action: SignupAction) {
  try {
    yield axios.post(`${API}/signup`, action.payload)
    yield put(signupSuccess())
  } catch (error: any) {
    yield put(signupFail(error.response.data.error))
  }
}

export default function* authSaga() {
  yield takeEvery(SIGNUP, handleSignup)
}
