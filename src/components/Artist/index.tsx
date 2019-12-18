import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Artist } from '../../store/ducks/artist/types';
import { ApplicationState } from '../../store';

import * as ArtistActions from '../../store/ducks/artist/actions';
import AlbumComponent from '../Album';

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
      <div>{artist?.artistName}
        <AlbumComponent/>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  artist: state.artist.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ArtistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArtistComponent);