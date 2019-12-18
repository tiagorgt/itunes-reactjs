import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArtistComponent from './components/Artist';
import { Provider } from 'react-redux';
import store from './store';

const App = () => <Provider store={store}><ArtistComponent /></Provider>;

export default App;
