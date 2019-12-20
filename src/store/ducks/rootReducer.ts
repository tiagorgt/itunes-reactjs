import { combineReducers } from 'redux';
import artist from './artist';
import album from './album';
import song from  './song';
import featuredArtists from './featured-artists';

export default combineReducers({
    artist, album, song, featuredArtists
});