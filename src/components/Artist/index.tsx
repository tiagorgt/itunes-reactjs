import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Artist } from '../../store/ducks/artist/types';
import { ApplicationState } from '../../store';

import * as ArtistActions from '../../store/ducks/artist/actions';
import AlbumComponent from '../Album';
import { Row, Col } from 'antd';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import './index.css';
import { Typography } from 'antd';

const { Paragraph } = Typography;

interface StateProps {
  artist?: Artist
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

class ArtistComponent extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { artist } = this.props;

    return (
      <div>
        <img className="artist-header" src={`${process.env.PUBLIC_URL}/assets/img/lil-wayne-cover.jpg`}></img>
        <div className="container">
          <div className="wrapper">
            <Title level={2}>{artist?.artistName}</Title>
            <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
            <AlbumComponent />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  artist: state.artist.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ArtistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArtistComponent);