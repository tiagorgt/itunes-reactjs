import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import * as FeaturedArtistsActions from '../../store/ducks/featured-artists/actions';
import Title from 'antd/lib/typography/Title';
import FeaturedArtistComponent from '../FeaturedArtist';
import { Artist } from '../../store/ducks/artist/types';

interface StateProps {
  featuredArtists: Artist[]
}

interface DispatchProps {
  loadRequest(term: string): void
}

interface OwnProps {
  artistName: string
}

type Props = StateProps & DispatchProps & OwnProps

class FeaturedArtistListComponent extends Component<Props> {
  artistName: string = '';
  artistPictureUrl: string = '';

  componentWillReceiveProps(newProps: Props) {
    const { loadRequest } = newProps;

    if (this.artistName !== newProps.artistName) {
      this.artistName = newProps.artistName;
      loadRequest(this.artistName);
    }
  }

  render() {
    const { featuredArtists } = this.props;

    return (
      <div className="featured-artist-list-component-container">
        <ul className="featured-artist-list-component-list">
        <Title level={4}>Featured Artists</Title>
          {featuredArtists.map(featuredArtist =>
            <FeaturedArtistComponent key={featuredArtist.artistId} artist={featuredArtist}/>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  featuredArtists: state.featuredArtists.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(FeaturedArtistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedArtistListComponent);