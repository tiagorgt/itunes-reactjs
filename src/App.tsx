import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArtistComponent from './components/Artist';
import { Provider } from 'react-redux';
import store from './store';
import { Layout } from 'antd';
import 'normalize.css';
const { Content } = Layout;

const App = () =>
    <Provider store={store}>
        <Layout>
            <Content>
                <ArtistComponent />
            </Content>
        </Layout>
    </Provider>;

export default App;
