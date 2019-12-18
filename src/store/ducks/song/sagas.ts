import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { SongTypes } from './types';

import { loadSuccess, loadFailure } from './actions';

export function* load(param: { type: SongTypes.LOAD_REQUEST, payload: number }) {
  try {
    const response = yield call(api.get, `/lookup?id=${param.payload}&entity=song`);    
    const results: any[] = response.data.results;
    yield put(loadSuccess(results.slice(1)));
  } catch (err) {
    yield put(loadFailure());
  }
}