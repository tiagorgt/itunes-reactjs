import { action } from 'typesafe-actions';
import { FeaturedArtistsTypes } from './types';
import { Artist } from '../artist/types';

export const loadRequest = (term: string) => action(FeaturedArtistsTypes.LOAD_REQUEST, term);

export const loadSuccess = (data: Artist[]) => action(FeaturedArtistsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(FeaturedArtistsTypes.LOAD_FAILURE);