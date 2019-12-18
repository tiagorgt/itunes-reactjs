import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import * as SongActions from '../../store/ducks/artist/actions';
import { Song } from '../../store/ducks/song/types';


interface StateProps {
  songs: Song[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

class SongComponent extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { songs } = this.props;

    return (
    <div>{songs}</div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  songs: state.song.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(SongActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SongComponent);