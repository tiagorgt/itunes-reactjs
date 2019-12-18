import {action} from 'typesafe-actions';
import  {SongTypes, Song} from './types';

export const loadRequest = () => action(SongTypes.LOAD_REQUEST);

export const loadSuccess = (data: Song[]) => action(SongTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(SongTypes.LOAD_FAILURE);