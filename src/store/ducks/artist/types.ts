/**
 * Action types
 */
 export enum ArtistTypes {
     LOAD_REQUEST = '@artist/LOAD_REQUEST',
     LOAD_SUCCESS = '@artist/LOAD_SUCCESS',
     LOAD_FAILURE = '@artist/LOAD_FAILURE',
 }

 /**
  * Data types
  */
 export interface Artist {
    wrapperType: string,
    artistType: string,
    artistName: string,
    artistLinkUrl: string,
    artistId: number,
    amgArtistId: number,
    primaryGenreName: string,
    primaryGenreId: number
 }

 /**
  * State type
  */
export interface ArtistState {
    readonly data?: Artist
    readonly loading: boolean
    readonly error: boolean
}