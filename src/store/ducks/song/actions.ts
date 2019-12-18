import {action} from 'typesafe-actions';
import  {SongTypes, Song} from './types';

export const loadRequest = (albumId: number) => action(SongTypes.LOAD_REQUEST, albumId);

export const loadSuccess = (data: Song[]) => action(SongTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(SongTypes.LOAD_FAILURE);