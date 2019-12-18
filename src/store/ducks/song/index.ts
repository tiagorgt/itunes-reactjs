import { SongState, SongTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: SongState = {
    data: [],
    error: false,
    loading: false
};

const reducer: Reducer<SongState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SongTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case SongTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case SongTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] };
        default:
            return state;
    }
}

export default reducer;