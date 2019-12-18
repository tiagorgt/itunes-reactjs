import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import * as SongActions from '../../store/ducks/song/actions';
import { Song } from '../../store/ducks/song/types';


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

  render() {
    const { songs } = this.props;

    return (
      songs.map(song => <div key={song.trackId}>{song.trackId}</div>)
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  songs: state.song.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(SongActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SongComponent);