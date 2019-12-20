import { ArtistState, ArtistTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: ArtistState = {
    data: {
        amgArtistId: 0,
        artistId: 0,
        artistLinkUrl: '',
        artistName: '',
        artistType: '',
        primaryGenreId: 0,
        primaryGenreName: '',
        wrapperType: ''
    },
    error: false,
    loading: false
};

const reducer: Reducer<ArtistState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ArtistTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case ArtistTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case ArtistTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
}

export default reducer;