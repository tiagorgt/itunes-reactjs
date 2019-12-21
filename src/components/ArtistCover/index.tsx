import React, { useState, useEffect } from 'react';

import { Artist } from '../../store/ducks/artist/types';
import { getArtistPictureUrl } from '../../utils/artist-picture';

interface OwnProps {
    artist: Artist
}

export default function FeaturedArtistComponent({ artist }: OwnProps) {
    let [artistPictureUrl, setArtistPictureUrl] = useState('');

    useEffect(() => {
        getArtistPictureUrl(artist.artistLinkUrl, true).then(response => {
            setArtistPictureUrl(response);
        });
    });

    return <img className="artist-cover-component" src={artistPictureUrl}></img>
}