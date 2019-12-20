import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';
import { FeaturedArtistsTypes } from './types';

export function* load(param: { type: FeaturedArtistsTypes.LOAD_REQUEST, payload: string }) {
  try {
    const response = yield call(api.get, `/search?term=${param.payload}&entity=allArtist&limit=5`);
    yield put(loadSuccess(response.data.results));
  } catch (err) {
    yield put(loadFailure());
  }
}