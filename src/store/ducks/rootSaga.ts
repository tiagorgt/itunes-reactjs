import { all, takeLatest } from 'redux-saga/effects';

import { ArtistTypes } from './artist/types';
import { AlbumTypes } from './album/types';
import { SongTypes } from './song/types';
import * as ArtistSagas from './artist/sagas';
import * as AlbumSagas from './album/sagas';
import * as SongSagas from './song/sagas';
import * as FeaturedArtists from './featured-artists/sagas';
import { FeaturedArtistsTypes } from './featured-artists/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(ArtistTypes.LOAD_REQUEST, ArtistSagas.load),
    takeLatest(AlbumTypes.LOAD_REQUEST, AlbumSagas.load),
    takeLatest(SongTypes.LOAD_REQUEST, SongSagas.load),
    takeLatest(FeaturedArtistsTypes.LOAD_REQUEST, FeaturedArtists.load)
  ]);
}