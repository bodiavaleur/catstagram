import React, { Component } from 'react';
import styled from 'styled-components';
import CatDescription from './CatDescription';

const CatPageContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;

export default class CatPage extends Component {
  render() {
    return (
      <CatPageContainer>
        <CatDescription />
      </CatPageContainer>
    );
  }
}
