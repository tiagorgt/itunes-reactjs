import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, '?id=5869117&entity=album&sort=recent');

    yield put(loadSuccess(response.data.results));
  } catch (err) {
    yield put(loadFailure());
  }
}