import {action} from 'typesafe-actions';
import  {ArtistTypes, Artist} from './types';

export const loadRequest = () => action(ArtistTypes.LOAD_REQUEST);

export const loadSuccess = (data: Artist) => action(ArtistTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(ArtistTypes.LOAD_FAILURE);