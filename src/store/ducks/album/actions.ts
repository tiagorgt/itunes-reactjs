import {action} from 'typesafe-actions';
import  {AlbumTypes, Album} from './types';

export const loadRequest = () => action(AlbumTypes.LOAD_REQUEST);

export const loadSuccess = (data: Album[]) => action(AlbumTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(AlbumTypes.LOAD_FAILURE);