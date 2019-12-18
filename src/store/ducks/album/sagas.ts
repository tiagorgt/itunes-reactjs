import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, '/lookup?id=5869117&entity=album&limit=2');
    const results: any[] = response.data.results;
    yield put(loadSuccess(results.slice(1)));
  } catch (err) {
    yield put(loadFailure());
  }
}