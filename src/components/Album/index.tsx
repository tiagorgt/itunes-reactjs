import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';

import * as AlbumActions from '../../store/ducks/album/actions';
import { Album } from '../../store/ducks/album/types';
import SongComponent from '../Song';
import { Row, Col, Divider, Button, Icon } from 'antd';
import './index.css'; import { Typography } from 'antd';

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
      albums.map(album =>
        <div key={album.collectionId}>
          <Row gutter={8}>
            <Col span={8}>
              <div className="album-wrapper">
                <img className="album-artwork" src={album.artworkUrl100.replace('100x100', '250x250')}></img>
                <Text type="secondary">{album.trackCount + ' Songs'}</Text>
                <Divider></Divider>
                <Title level={4}>EDITOR'S NOTES</Title>
                <Paragraph>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Paragraph>
              </div>
            </Col>
            <Col span={16}>
              <Title level={4}>{album.collectionName}</Title>
              <Button type="danger" ghost>Listen on <strong>Apple Music</strong>&nbsp;<Icon type="select" /></Button>
              <SongComponent albumId={album.collectionId} />
            </Col>
          </Row>
        </div>)
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  albums: state.album.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AlbumActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlbumComponent);