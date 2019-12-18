import { AlbumState, AlbumTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: AlbumState = {
    data: [],
    error: false,
    loading: false
};

const reducer: Reducer<AlbumState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AlbumTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case AlbumTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case AlbumTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] };
        default:
            return state;
    }
}

export default reducer;