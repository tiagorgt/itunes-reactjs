import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';

import * as AlbumActions from '../../store/ducks/album/actions';
import { Album } from '../../store/ducks/album/types';
import SongComponent from '../Song';
import { Row, Col, Divider, Button, Icon, Typography } from 'antd';

const { Paragraph, Text, Title } = Typography;

interface StateProps {
  albums: Album[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

class AlbumComponent extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { albums } = this.props;

    return (

      <div className="album-component-container">
        {albums.map(album =>
          <div key={album.collectionId} className="album-component-album-item">
            <Row gutter={16}>
              <Col sm={8}>
                <div className="album-component-album-wrapper">
                  <div className="hide-desktop">
                    <img className="album-component-album-artwork" src={album.artworkUrl100.replace('100x100', '120x120')}></img>
                    <Title className="album-component-album-title" level={4}>{album.collectionName}</Title>
                  </div>
                  <div className="hide-mobile">
                    <img className="album-component-album-artwork" src={album.artworkUrl100.replace('100x100', '250x250')}></img>
                  </div>
                  <Button className="mb-15 hide-desktop" type="danger" ghost>Listen on <strong>Apple Music</strong>&nbsp;<Icon type="select" /></Button>
                  <Text className="hide-mobile" type="secondary">{album.trackCount + ' Songs'}</Text>
                  <Divider className="hide-mobile"></Divider>
                  <Title level={4}>EDITOR'S NOTES</Title>
                  <Paragraph className="hide-mobile">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
                  <Paragraph className="hide-desktop" ellipsis={{ rows: 3 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
                </div>
              </Col>
              <Col sm={16}>
                <Title className="hide-mobile" level={4}>{album.collectionName}</Title>
                <Button className="mb-15 hide-mobile" type="danger" ghost>Listen on <strong>Apple Music</strong>&nbsp;<Icon type="select" /></Button>
                <SongComponent albumId={album.collectionId} />
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  albums: state.album.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AlbumActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlbumComponent);