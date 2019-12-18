import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, '/lookup?id=5869117');
    console.log(response.data.results[0]);
    yield put(loadSuccess(response.data.results[0]));
  } catch (err) {
    yield put(loadFailure());
  }
}