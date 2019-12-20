import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';
import { AlbumTypes } from './types';

export function* load(param: { type: AlbumTypes.LOAD_REQUEST, payload: number }) {
  try {
    const response = yield call(api.get, `/lookup?id=${param.payload}&entity=album&limit=2`);
    const results: any[] = response.data.results;
    yield put(loadSuccess(results.slice(1)));
  } catch (err) {
    yield put(loadFailure());
  }
}