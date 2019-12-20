import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import * as FeaturedArtistsActions from '../../store/ducks/featured-artists/actions';
import { FeaturedArtists } from '../../store/ducks/featured-artists/types';
import { List, Avatar, Row, Col } from 'antd';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

interface StateProps {
  featuredArtists: FeaturedArtists[]
}

interface DispatchProps {
  loadRequest(term: string): void
}

interface OwnProps {
  artistName: string
}

type Props = StateProps & DispatchProps & OwnProps

class FeaturedArtistsComponent extends Component<Props> {
  artistName: string = '';

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
      <div className="featured-artists-container">
        <ul className="featured-artists-list">
        <Title level={4}>Featured Artists</Title>
          {featuredArtists.map(featuredArtist =>
            <li className="featured-artists-item">
              <Avatar size={120} src={`${process.env.PUBLIC_URL}/assets/img/lil-wayne-cover-desktop.jpg`} />
              <Title level={4}>{featuredArtist.artistName}</Title>
              <Text type="secondary">{featuredArtist.primaryGenreName}</Text>
            </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedArtistsComponent);