import React, { Component } from 'react';
import styled from 'styled-components';
import AppHeader from './components/AppHeader/AppHeader';
import BreedsContent from './components/BreedsContent/BreedsContent';
import CatPage from './components/CatPage/CatPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = styled.main`
  display: flex;
  flex-direction: column;
`;

export default class Catstagram extends Component {
  render() {
    return (
      <Router>
        <App>
          <AppHeader />
          <Route exact path="/" component={BreedsContent} />
          <Route path="/catpage" component={CatPage} />
        </App>
      </Router>
    );
  }
}
