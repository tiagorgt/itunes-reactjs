import { all, takeLatest } from 'redux-saga/effects';

import { ArtistTypes } from './artist/types';
import * as ArtistSagas from './artist/sagas';
import * as AlbumSagas from './artist/sagas';
import * as SongSagas from './artist/sagas';
import { AlbumTypes } from './album/types';
import { SongTypes } from './song/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(ArtistTypes.LOAD_REQUEST, ArtistSagas.load),
    takeLatest(AlbumTypes.LOAD_REQUEST, AlbumSagas.load),
    takeLatest(SongTypes.LOAD_REQUEST, SongSagas.load)
  ]);
}