import React, { Component } from 'react';
import styled from 'styled-components';
import AppHeader from './components/AppHeader/AppHeader';
import BreedsContent from './components/BreedsContent/BreedsContent';
import CatPage from './components/CatPage/CatPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = styled.main`
  display: grid;
  height: 100%;
  grid-auto-rows: 1fr;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
`;

const Content = styled.div`
  grid-area: 2 / 1 / 11 span / 12 span;
`;

export default class Catstagram extends Component {
  render() {
    return (
      <Router>
        <App>
          <AppHeader />
          <Content>
            <Route exact path="/" component={BreedsContent} />
            <Route path="/catpage" component={CatPage} />
          </Content>
        </App>
      </Router>
    );
  }
}
