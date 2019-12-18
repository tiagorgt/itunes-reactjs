/**
 * Action types
 */
 export enum AlbumTypes {
     LOAD_REQUEST = '@album/LOAD_REQUEST',
     LOAD_SUCCESS = '@album/LOAD_SUCCESS',
     LOAD_FAILURE = '@album/LOAD_FAILURE',
 }

 /**
  * Data types
  */
 export interface Album {
    wrapperType: string,
    collectionType: string,
    artistId: number,
    collectionId: string,
    amgArtistId: string,
    artistName: string,
    collectionName: string,
    collectionCensoredName: string,
    artistViewUrl: string,
    collectionViewUrl: string,
    artworkUrl60: string,
    artworkUrl100: string,
    collectionPrice: number,
    collectionExplicitness: string,
    contentAdvisoryRating: string,
    trackCount: number,
    copyright: string,
    country: string,
    currency: string,
    releaseDate: string,
    primaryGenreName: string
 }

 /**
  * State type
  */
export interface AlbumState {
    readonly data: Album[]
    readonly loading: boolean
    readonly error: boolean
}