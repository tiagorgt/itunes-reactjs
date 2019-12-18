import { ArtistState, ArtistTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: ArtistState = {
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