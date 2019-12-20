/**
 * Action types
 */
 export enum FeaturedArtistsTypes {
     LOAD_REQUEST = '@featured-artists/LOAD_REQUEST',
     LOAD_SUCCESS = '@featured-artists/LOAD_SUCCESS',
     LOAD_FAILURE = '@featured-artists/LOAD_FAILURE',
 }

 /**
  * Data types
  */
 export interface FeaturedArtists {
    wrapperType: string,
    artistType: string,
    artistName: string,
    artistLinkUrl: string,
    artistId: number,
    amgFeaturedArtistsId: number,
    primaryGenreName: string,
    primaryGenreId: number
 }

 /**
  * State type
  */
export interface FeaturedArtistsState {
    readonly data: FeaturedArtists[]
    readonly loading: boolean
    readonly error: boolean
}