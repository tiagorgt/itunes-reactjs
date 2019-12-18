import { combineReducers } from 'redux';
import artist from './artist';
import album from './album';
import song from  './song';

export default combineReducers({
    artist, album, song
});