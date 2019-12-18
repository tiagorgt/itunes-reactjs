import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';

import * as AlbumActions from '../../store/ducks/artist/actions';
import { Album } from '../../store/ducks/album/types';
import  SongComponent from '../Song';

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
      albums.map(album => <div> {album} </div>)    
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  albums: state.album.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AlbumActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlbumComponent);