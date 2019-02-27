import React, { Component } from 'react';
import Logo from './Logo';
import Search from './Search';
import styled from 'styled-components';

const Header = styled.header`
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  height: 8vh;
  width: 100vw;
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
