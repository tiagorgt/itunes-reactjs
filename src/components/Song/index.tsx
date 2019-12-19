import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import * as SongActions from '../../store/ducks/song/actions';
import { Song } from '../../store/ducks/song/types';
import { List, Avatar } from 'antd';
import * as moment from 'moment';
import Text from 'antd/lib/typography/Text';


interface StateProps {
  songs: Song[]
}

interface DispatchProps {
  loadRequest(albumId: number): void
}

interface OwnProps {
  albumId: number
}

type Props = StateProps & DispatchProps & OwnProps

class SongComponent extends Component<Props> {
  componentDidMount() {
    const { loadRequest, albumId } = this.props;

    loadRequest(albumId);
  }

  formatSongTime(trackTimeMillis: number): string {
    return moment.utc(trackTimeMillis).format('mm:ss');
  }

  render() {
    const { songs } = this.props;

    return (
        <List
          className="song-component-list"
          itemLayout="horizontal"
          dataSource={songs}
          renderItem={song => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={song.artworkUrl100} />}
                title={song.trackName}
                description={song.artistName}
              />
              <Text type="secondary">{this.formatSongTime(song.trackTimeMillis)}</Text>
            </List.Item>
          )}
        />
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  songs: state.song.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(SongActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SongComponent);