import React, { useState, useEffect } from 'react';

import { Avatar } from 'antd';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { Artist } from '../../store/ducks/artist/types';
import { getArtistPictureUrl } from '../../utils/artist-picture';

interface OwnProps {
    artist: Artist
}

export default function FeaturedArtistComponent({ artist }: OwnProps) {
    let [ artistPictureUrl, setArtistPictureUrl ] = useState('');

    useEffect(() => {
        getArtistPictureUrl(artist.artistLinkUrl).then(response => {
            setArtistPictureUrl(response);
        });
    });    

    return <li className="featured-artist-component-item">
        <Avatar size={120} src={artistPictureUrl} />
        <Title level={4}>{artist.artistName}</Title>
        <Text type="secondary">{artist.primaryGenreName}</Text>
    </li>
}