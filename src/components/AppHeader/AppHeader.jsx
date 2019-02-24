import React, { Component } from 'react';
import Logo from './Logo';
import Search from './Search';
import styled from 'styled-components';

const Header = styled.header`
  grid-area: 1 / 1 / 1 span / 12 span;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  height: 100%;
`;

export default class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Logo />
        <Search />
      </Header>
    );
  }
}
