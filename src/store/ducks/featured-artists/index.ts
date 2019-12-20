import { FeaturedArtistsState, FeaturedArtistsTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: FeaturedArtistsState = {
    data: [],
    error: false,
    loading: false
};

const reducer: Reducer<FeaturedArtistsState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FeaturedArtistsTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case FeaturedArtistsTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case FeaturedArtistsTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
}

export default reducer;