import { Artist } from '../artist/types';

/**
 * Action types
 */
 export enum FeaturedArtistsTypes {
     LOAD_REQUEST = '@featured-artists/LOAD_REQUEST',
     LOAD_SUCCESS = '@featured-artists/LOAD_SUCCESS',
     LOAD_FAILURE = '@featured-artists/LOAD_FAILURE',
 }

 /**
  * State type
  */
export interface FeaturedArtistsState {
    readonly data: Artist[]
    readonly loading: boolean
    readonly error: boolean
}