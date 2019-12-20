import rootReducer from './ducks/rootReducer';
import { createStore, Store, applyMiddleware } from 'redux';
import { ArtistState } from './ducks/artist/types';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './ducks/rootSaga';
import { AlbumState } from './ducks/album/types';
import { SongState } from './ducks/song/types';
import { FeaturedArtistsState } from './ducks/featured-artists/types';

export interface ApplicationState {
    artist: ArtistState;
    album: AlbumState;
    song: SongState;
    featuredArtists: FeaturedArtistsState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;