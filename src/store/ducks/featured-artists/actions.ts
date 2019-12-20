import { action } from 'typesafe-actions';
import { FeaturedArtists, FeaturedArtistsTypes } from './types';

export const loadRequest = (term: string) => action(FeaturedArtistsTypes.LOAD_REQUEST, term);

export const loadSuccess = (data: FeaturedArtists[]) => action(FeaturedArtistsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(FeaturedArtistsTypes.LOAD_FAILURE);