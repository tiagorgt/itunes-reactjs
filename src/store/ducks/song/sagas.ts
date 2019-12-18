import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, '/lookup?id=1477624080&entity=song');

    yield put(loadSuccess(response.data.results));
  } catch (err) {
    yield put(loadFailure());
  }
}