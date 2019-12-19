import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Artist } from '../../store/ducks/artist/types';
import { ApplicationState } from '../../store';

import * as ArtistActions from '../../store/ducks/artist/actions';
import AlbumComponent from '../Album';
import { Row, Col, List, Icon, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { Typography } from 'antd';
import moment from 'moment';

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
    const artistInfoList = [
      {
        title: 'ORIGIN',
        description: 'New Orleans, LA'
      }, {
        title: 'GENRE',
        description: artist?.primaryGenreName
      }, {
        title: 'BORN',
        description: 'Sep 27, 1982'
      }
    ]

    return (
      <div>
        <img className="artist-component-artist-cover hide-mobile" src={`${process.env.PUBLIC_URL}/assets/img/lil-wayne-cover-desktop.jpg`}></img>
        <img className="artist-component-artist-cover hide-desktop" src={`${process.env.PUBLIC_URL}/assets/img/lil-wayne-cover-mobile.jpg`}></img>
        <div className="artist-component-container">
          <div className="artist-component-wrapper">
            <Title level={2}>{artist?.artistName}</Title>
            <Row gutter={16}>
              <Col sm={16}>
                <Paragraph className="hide-mobile">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
                <Paragraph className="hide-desktop" ellipsis={{rows:3}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
                <Button className="mb-15 hide-desktop" type="danger" ghost>View on <strong>Apple Music</strong>&nbsp;<Icon type="select" /></Button>
              </Col>
              <Col sm={8}>
                <List 
                  className="artist-component-list"
                  itemLayout="horizontal"
                  dataSource={artistInfoList}
                  renderItem={info => (
                    <List.Item>
                      <List.Item.Meta
                        title={<Text type="secondary">{info.title}</Text>}
                        description={<Text>{info.description}</Text>}
                      />
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
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